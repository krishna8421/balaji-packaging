"use client";

import { handleAddAdminEmail } from "./actions";
import { Input, Button } from "@nextui-org/react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { toast } from "sonner";

const AddAdminsForm = () => {
  return (
    <form
      className="flex gap-4 items-end"
      action={async (formData) => {
        const res = await handleAddAdminEmail(formData);
        if (res.success) {
          toast.success(res.msg);
        } else {
          toast.error(res.msg);
        }
      }}
    >
      <Input
        type="email"
        name="email"
        label="Add new admin"
        placeholder="admin@example.com"
        labelPlacement="outside"
        startContent={
          <MdOutlineAlternateEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
      <Button
        isIconOnly
        type="submit"
        variant="ghost"
        aria-label="Add new admin"
      >
        <IoIosAdd className="text-2xl flex-shrink-0" />
      </Button>
    </form>
  );
};

export default AddAdminsForm;
