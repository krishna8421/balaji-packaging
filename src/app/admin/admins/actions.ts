"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import z from "zod";

export const handleRemoveAdminEmail = async (id: string) => {
  await db.adminEmail.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/admins");
};

const AdminEmailSchema = z.object({
  email: z.string().email(),
});

export const handleAddAdminEmail = async (formData: FormData) => {
  const email = formData.get("email") as string;

  if (!AdminEmailSchema.safeParse({ email }).success) {
    return {
      msg: "Invalid email",
      success: false,
    };
  }

  try {
    if (await db.adminEmail.findUnique({ where: { email } })) {
      return {
        msg: "Admin already exists",
        success: false,
      };
    }

    await db.adminEmail.create({
      data: {
        email: email.toLowerCase(),
      },
    });

    revalidatePath("/admin/admins");

    return {
      msg: "Admin added successfully",
      success: true,
    };
  } catch (e) {
    console.log(e);
    return {
      msg: "Failed to add admin",
      success: false,
    };
  }
};
