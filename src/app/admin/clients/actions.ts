"use server";

import { db } from "@/lib/db";
import { Client } from "@/types";
import { revalidatePath } from "next/cache";
import z from "zod";

export const handleDeleteClient = async (id: string) => {
  await db.client.delete({
    where: {
      id,
    },
  });
  console.log("deleting client with id: ", id);

  revalidatePath("/admin/clients");
};

const ClientSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
  phone: z.string(),
  gstNumber: z.string(),
  postalCode: z.string(),
});

export const handleAddClient = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const address = formData.get("address");
  const phone = formData.get("phone");
  const gstNumber = formData.get("gstNumber");
  const postalCode = formData.get("postalCode");

  const parseResult = ClientSchema.safeParse({
    name,
    email,
    address,
    phone,
    gstNumber,
    postalCode,
  });

  if (!parseResult.success) {
    return {
      msg: "Invalid Data",
      success: false,
    };
  }

  try {
    if (
      await db.client.findUnique({
        where: {
          email: parseResult.data.email,
        },
      })
    ) {
      return {
        msg: "Client already exists",
        success: false,
      };
    }

    await db.client.create({
      data: parseResult.data,
    });

    revalidatePath("/admin/clients");

    return {
      msg: "Client added successfully",
      success: true,
    };
  } catch (e) {
    console.log(e);
    return {
      msg: "Failed to add client",
      success: false,
    };
  }
};

export const handleEditClient = async (clientData: Partial<Client>) => {
  const parseResult = ClientSchema.safeParse(clientData);

  if (!parseResult.success) {
    return {
      msg: "Invalid Data",
      success: false,
    };
  }

  try {
    await db.client.update({
      where: {
        id: clientData.id,
      },
      data: clientData,
    });

    revalidatePath("/admin/clients");

    return {
      msg: "Client updated successfully",
      success: true,
    };
  } catch (e) {
    console.log(e);
    return {
      msg: "Failed to update client",
      success: false,
    };
  }
};
