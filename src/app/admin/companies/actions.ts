"use server";

import { db } from "@/lib/db";
import { Company } from "@/types";
import { revalidatePath } from "next/cache";
import z from "zod";

export const handleDeleteCompany = async (id: string) => {
  await db.company.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/companies");
};

const CompanySchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
  phone: z.string(),
  gstNumber: z.string(),
  postalCode: z.string(),
});

export const handleAddCompany = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const address = formData.get("address");
  const phone = formData.get("phone");
  const gstNumber = formData.get("gstNumber");
  const postalCode = formData.get("postalCode");

  const parseResult = CompanySchema.safeParse({
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
      await db.company.findUnique({
        where: {
          email: parseResult.data.email,
        },
      })
    ) {
      return {
        msg: "Company already exists",
        success: false,
      };
    }

    await db.company.create({
      data: parseResult.data,
    });

    revalidatePath("/admin/companies");

    return {
      msg: "Company added successfully",
      success: true,
    };
  } catch (e) {
    console.log(e);
    return {
      msg: "Failed to add company",
      success: false,
    };
  }
};

export const handleEditCompany = async (companyData: Partial<Company>) => {
  const parseResult = CompanySchema.safeParse(companyData);

  if (!parseResult.success) {
    return {
      msg: "Invalid Data",
      success: false,
    };
  }

  try {
    await db.company.update({
      where: {
        id: companyData.id,
      },
      data: companyData,
    });

    revalidatePath("/admin/companies");

    return {
      msg: "Company updated successfully",
      success: true,
    };
  } catch (e) {
    console.log(e);
    return {
      msg: "Failed to update company",
      success: false,
    };
  }
};
