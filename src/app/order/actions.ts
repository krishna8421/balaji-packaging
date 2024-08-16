"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import z from "zod";

const OrderItemSchema = z.object({
  name: z.string().min(1),
  sizeA: z.string().min(1),
  sizeAUnit: z.string().min(1),
  sizeB: z.string().min(1),
  sizeBUnit: z.string().min(1),
  gsm: z.string().min(1),
  quantity: z.string().min(1),
  isUrgent: z.boolean(),
});

const OrderSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  address: z.string().min(1),
  phone: z.string().min(1),
  gstNumber: z.string().min(1),
  postalCode: z.string().min(1),
  additionalNotes: z.string().optional(),
  companyId: z.string().min(1),
  clientId: z.string().min(1),
  items: z.array(OrderItemSchema),
});

export const handleAddOrder = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const address = formData.get("address");
  const phone = formData.get("phone") ?? "";
  const gstNumber = formData.get("gstNumber");
  const postalCode = formData.get("postalCode");
  const additionalNotes = formData.get("additionalNotes");
  const companyId = formData.get("companyId");
  const clientId = formData.get("clientId");
  const itemsString = formData.get("items");

  const items = JSON.parse(itemsString as string)?.items;

  const parseResult = OrderSchema.safeParse({
    name,
    email,
    address,
    phone,
    gstNumber,
    postalCode,
    additionalNotes,
    companyId,
    clientId,
    items,
  });

  if (!parseResult.success) {
    return {
      msg: "Invalid Data. Please check your inputs",
      success: false,
    };
  }

  if (items.length === 0) {
    return {
      msg: "Order Items are required",
      success: false,
    };
  }

  try {
    await db.order.create({
      data: {
        name: parseResult.data.name,
        email: parseResult.data.email,
        address: parseResult.data.address,
        phone: parseResult.data.phone,
        gstNumber: parseResult.data.gstNumber,
        postalCode: parseResult.data.postalCode,
        additionalNotes: parseResult.data.additionalNotes,
        companyId: parseResult.data.companyId,
        clientId: parseResult.data.clientId,
        items: {
          create: items,
        },
      },
    });

    revalidatePath("/admin/all-orders");
    revalidatePath("/admin/orders-placed");
    revalidatePath("/admin/orders-received");

    return {
      msg: "Order added successfully",
      success: true,
    };
  } catch (e) {
    console.log(e);
    return {
      msg: "Failed to add order",
      success: false,
    };
  }
};
