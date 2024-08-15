"use client";

import { handleAddClient } from "./actions";
import { Input, Button, Textarea } from "@nextui-org/react";
import { toast } from "sonner";
import { useRef } from "react";

const AddClientForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      className="flex flex-col gap-8 justify-center w-full"
      action={async (formData) => {
        const res = await handleAddClient(formData);
        if (res.success) {
          toast.success(res.msg);
          ref.current?.reset();
        } else {
          toast.error(res.msg);
        }
      }}
    >
      <Input
        className="w-full"
        isRequired
        type="text"
        name="name"
        label="Name"
        labelPlacement="outside"
        placeholder="Client's name"
      />
      <Input
        className="w-full"
        isRequired
        type="email"
        name="email"
        label="Email"
        labelPlacement="outside"
        placeholder="Client's email"
      />
      <Input
        className="w-full"
        isRequired
        type="text"
        name="phone"
        label="Phone"
        labelPlacement="outside"
        placeholder="Client's phone number"
      />
      <Input
        className="w-full"
        isRequired
        type="text"
        name="gstNumber"
        label="GST Number"
        labelPlacement="outside"
        placeholder="Client's GST number"
      />
      <Input
        className="w-full"
        isRequired
        type="number"
        name="postalCode"
        label="Postal Code"
        labelPlacement="outside"
        placeholder="Client's postal code"
      />
      <Textarea
        className="w-full"
        isRequired
        type="text"
        name="address"
        label="Address"
        labelPlacement="outside"
        placeholder="Client's address"
      />
      <Button
        type="submit"
        variant="ghost"
        color="success"
        aria-label="Add new client"
        className="w-full mt-6 mb-40"
      >
        Add
      </Button>
    </form>
  );
};

export default AddClientForm;
