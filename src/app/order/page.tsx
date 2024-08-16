import React from "react";
import OrderForm from "./order-form";
import { db } from "@/lib/db";
import OrderItemsTable from "./order-items-table";

const OrderPage = async () => {
  const clients = await db.client.findMany();
  const companies = await db.company.findMany();

  return (
    <div className="flex flex-col gap-14">
      <h1 className="text-3xl font-semibold text-center">Place a new Order</h1>
      <OrderForm clients={clients} companies={companies} />
    </div>
  );
};

export default OrderPage;
