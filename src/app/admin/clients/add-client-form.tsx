"use client";

import { handleAddClient } from "./actions";
import { Input, Button } from "@nextui-org/react";
import { toast } from "sonner";
import { useRef } from "react";

const AddClientForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      className="flex flex-wrap gap-8 justify-center"
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
        className="max-w-96"
        isRequired
        type="text"
        name="name"
        label="Name"
        labelPlacement="outside"
        placeholder="Client's name"
      />
      <Input
        className="max-w-96"
        isRequired
        type="email"
        name="email"
        label="Email"
        labelPlacement="outside"
        placeholder="Client's email"
      />
      <Input
        className="max-w-96"
        isRequired
        type="text"
        name="address"
        label="Address"
        labelPlacement="outside"
        placeholder="Client's address"
      />
      <Input
        className="max-w-96"
        isRequired
        type="text"
        name="phone"
        label="Phone"
        labelPlacement="outside"
        placeholder="Client's phone number"
      />
      <Input
        className="max-w-96"
        isRequired
        type="text"
        name="gstNumber"
        label="GST Number"
        labelPlacement="outside"
        placeholder="Client's GST number"
      />
      <Input
        className="max-w-96"
        isRequired
        type="number"
        name="postalCode"
        label="Postal Code"
        labelPlacement="outside"
        placeholder="Client's postal code"
      />

      <Button
        type="submit"
        variant="ghost"
        color="success"
        aria-label="Add new admin"
        className="w-11/12 mt-6 mb-40"
      >
        Add
      </Button>
    </form>
  );
};

export default AddClientForm;
