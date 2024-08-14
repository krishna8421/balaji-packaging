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
} from "@nextui-org/react";
import { useCallback, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { handleDeleteClient, handleEditClient } from "./actions";
import { FiCheck, FiX } from "react-icons/fi";
import EditModal from "./edit-modal";
import { Client } from "@/types";
import { useClientStore } from "@/store/useClientStore";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "EMAIL", uid: "email" },
  { name: "ADDRESS", uid: "address" },
  { name: "PHONE", uid: "phone" },
  { name: "GST NUMBER", uid: "gstNumber" },
  { name: "POSTAL CODE", uid: "postalCode" },
  { name: "ACTIONS", uid: "actions" },
];

const ClientsTable = ({ clients }: { clients: Client[] }) => {
  // const [clientData, setClientData] = useState<Partial<Client>>({});
  const { setEditClientData } = useClientStore((state) => state);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const renderCell = (client: Client, columnKey: string) => {
    const cellValue = client[columnKey];
    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Edit client">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={async () => {
                  setEditClientData(client);
                  onOpen();
                }}
              >
                <TbEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete client">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={async () => await handleDeleteClient(client.id)}
              >
                <MdDelete />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return <p>{cellValue}</p>;
    }
  };

  return (
    <>
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
        <TableBody items={clients}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {renderCell(item, String(columnKey))}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <EditModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default ClientsTable;
