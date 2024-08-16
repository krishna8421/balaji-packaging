"use client";

import { handleAddOrder } from "./actions";
import { Input, Button, Textarea } from "@nextui-org/react";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { Company, Client } from "@prisma/client";
import OrderItemsTable from "./order-items-table";
import { useOrderStore } from "@/store/useOrderStore";

interface OrderFormProps {
  clients: Client[];
  companies: Company[];
}

const OrderForm = ({ clients, companies }: OrderFormProps) => {
  const [mill, setMill] = useState("");
  const [company, setCompany] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  const { orderItems } = useOrderStore((state) => state);

  return (
    <form
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      action={async (formData) => {
        formData.set(
          "items",
          JSON.stringify({
            items: orderItems,
          })
        );
        const res = await handleAddOrder(formData);
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
        placeholder="Your name"
      />
      <Input
        className="w-full"
        isRequired
        type="email"
        name="email"
        label="Email"
        labelPlacement="outside"
        placeholder="Your email"
      />
      <Input
        className="w-full"
        isRequired
        type="number"
        name="phone"
        label="Phone"
        labelPlacement="outside"
        placeholder="Your phone number"
      />
      <Input
        className="w-full"
        isRequired
        type="number"
        name="gstNumber"
        label="GST Number"
        labelPlacement="outside"
        placeholder="Your GST number"
      />
      <Input
        className="w-full"
        isRequired
        type="number"
        name="postalCode"
        label="Postal Code"
        labelPlacement="outside"
        placeholder="Your postal code"
      />
      <Textarea
        className="w-full col-span-2"
        isRequired
        type="text"
        name="address"
        label="Address"
        labelPlacement="outside"
        placeholder="Your address"
      />
      <div className="col-span-2">
        <Select
          isRequired
          label="Mill"
          name="clientId"
          labelPlacement="outside"
          placeholder="Select a Mill"
          className="w-full"
          selectedKeys={[mill]}
          onChange={(e) => {
            setMill(e.target.value);
          }}
        >
          {clients.map((client) => (
            <SelectItem key={client.id}>{client.name}</SelectItem>
          ))}
        </Select>

        {mill !== "" && (
          <div className="mt-4 p-4 border-2 border-neutral-200 dark:border-neutral-700 rounded-lg">
            {clients
              .filter((c) => c.id === mill)
              .map((c) => (
                <div key={c.id}>
                  <h3 className="text-xl font-semibold">{c.name}</h3>
                  <p>
                    <span className="font-semibold text-sm">Address:</span>{" "}
                    {c.address}, {c.postalCode}
                  </p>
                  <p>
                    <span className="font-semibold text-sm">Email:</span>{" "}
                    {c.email}
                  </p>
                  <p>
                    <span className="font-semibold text-sm">Phone:</span>{" "}
                    {c.phone}
                  </p>
                  <p>
                    <span className="font-semibold text-sm">GST Number:</span>{" "}
                    {c.gstNumber}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="col-span-2">
        <Select
          isRequired
          label="Company"
          name="companyId"
          labelPlacement="outside"
          placeholder="Select a Company"
          className="w-full"
          selectedKeys={[company]}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        >
          {companies.map((company) => (
            <SelectItem key={company.id}>{company.name}</SelectItem>
          ))}
        </Select>

        {company !== "" && (
          <div className="mt-4 p-4 border-2 border-neutral-200 dark:border-neutral-700 rounded-lg">
            {companies
              .filter((c) => c.id === company)
              .map((c) => (
                <div key={c.id}>
                  <h3 className="text-xl font-semibold">{c.name}</h3>
                  <p>
                    <span className="font-semibold text-sm">Address:</span>{" "}
                    {c.address}, {c.postalCode}
                  </p>
                  <p>
                    <span className="font-semibold text-sm">Email:</span>{" "}
                    {c.email}
                  </p>
                  <p>
                    <span className="font-semibold text-sm">Phone:</span>{" "}
                    {c.phone}
                  </p>
                  <p>
                    <span className="font-semibold text-sm">GST Number:</span>{" "}
                    {c.gstNumber}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
      <Textarea
        className="w-full col-span-2"
        type="text"
        name="additionalNotes"
        label="Additional Notes"
        labelPlacement="outside"
        placeholder="Additional Notes (Optional)"
      />

      <OrderItemsTable />

      <div className="flex justify-end mt-6 col-span-2">
        <Button
          type="submit"
          variant="solid"
          color="success"
          aria-label="Add new client"
          className="w-fit"
        >
          Place Order
        </Button>
      </div>
    </form>
  );
};

export default OrderForm;
