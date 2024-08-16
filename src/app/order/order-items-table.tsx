"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  useDisclosure,
  Checkbox,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { OrderItem } from "@/types";
import { useOrderStore } from "@/store/useOrderStore";
import { useState, useRef, useEffect } from "react";

const columns = [
  { name: "ITEM NO.", uid: "id" },
  { name: "NAME", uid: "name" },
  { name: "Size A", uid: "sizeA" },
  { name: "Size B", uid: "sizeB" },
  { name: "GSM", uid: "gsm" },
  { name: "QUANTITY (Tons)", uid: "quantity" },
  { name: "URGENT", uid: "isUrgent" },
  { name: "ACTIONS", uid: "actions" },
];

const OrderItemsTable = () => {
  const { orderItems, updateOrderItem, removeOrderItem, addOrderItem } =
    useOrderStore((state) => state);
  const [focusedColumn, setFocusedColumn] = useState<string | null>(null);
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  useEffect(() => {
    if (focusedColumn && inputRefs.current[focusedColumn]) {
      inputRefs.current[focusedColumn]?.focus();
    }
  }, [focusedColumn]);

  const renderCell = (orderItem: OrderItem, columnKey: string) => {
    const cellValue = orderItem[columnKey];
    const inputRefKey = `${orderItem.id}-${columnKey}`;

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip color="danger" content="Delete company">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => removeOrderItem(orderItem.id)}
              >
                <MdDelete />
              </span>
            </Tooltip>
          </div>
        );
      case "isUrgent":
        return (
          <Checkbox
            color="secondary"
            isSelected={orderItem.isUrgent}
            onValueChange={(val) => {
              const updatedOrderItem = { ...orderItem, isUrgent: val };
              updateOrderItem(updatedOrderItem);
            }}
          />
        );
      case "id":
        return <span>{cellValue}</span>;

      default:
        return (
          <div
            key={`${orderItem.id}-${columnKey}`}
            className="flex gap-1 items-center"
          >
            <input
              ref={(el) => {
                inputRefs.current[inputRefKey] = el;
              }}
              key={inputRefKey}
              type={columnKey === "name" ? "text" : "number"}
              value={String(cellValue)}
              className={`bg-transparent border-b border-gray-500 focus:border-gray-300 outline-none p-1 transition-all duration-200 ease-in-out ${
                columnKey === "name" ? "w-40" : "w-20"
              }`}
              onFocus={() => setFocusedColumn(inputRefKey)}
              onChange={(e) => {
                const updatedOrderItem = {
                  ...orderItem,
                  [columnKey]: e.target.value,
                };
                updateOrderItem(updatedOrderItem);
              }}
            />
            {columnKey === "sizeA" || columnKey === "sizeB" ? (
              <Select
                className="w-[4.75rem]"
                placeholder="Unit"
                selectedKeys={
                  columnKey === "sizeA"
                    ? [orderItem.sizeAUnit]
                    : [orderItem.sizeBUnit]
                }
                onChange={(e) => {
                  const updatedOrderItem = {
                    ...orderItem,
                    [columnKey === "sizeA" ? "sizeAUnit" : "sizeBUnit"]:
                      e.target.value,
                  };
                  updateOrderItem(updatedOrderItem);
                }}
              >
                <SelectItem key="CM" value="CM">
                  CM
                </SelectItem>
                <SelectItem key="IN" value="IN">
                  IN
                </SelectItem>
              </Select>
            ) : null}
          </div>
        );
    }
  };

  return (
    <div className="col-span-2 flex flex-col gap-1.5">
      <label className="dark:text-[#ECEDEE] text-[#11181C] text-sm">
        Order Items
      </label>
      <Table>
        <TableHeader>
          {columns.map((column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody items={orderItems} emptyContent={"No rows to display."}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  <div className="flex justify-center items-center">
                    {renderCell(item, String(columnKey))}
                  </div>
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Button
        color="success"
        variant="ghost"
        className="mt-4"
        onPress={addOrderItem}
      >
        Add Items
      </Button>
    </div>
  );
};

export default OrderItemsTable;
