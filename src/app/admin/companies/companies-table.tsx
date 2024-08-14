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
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { handleDeleteCompany } from "./actions";
import EditCompanyModal from "./edit-company-model";
import { Company } from "@/types";
import { useCompanyStore } from "@/store/useCompanyStore";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "EMAIL", uid: "email" },
  { name: "ADDRESS", uid: "address" },
  { name: "PHONE", uid: "phone" },
  { name: "GST NUMBER", uid: "gstNumber" },
  { name: "POSTAL CODE", uid: "postalCode" },
  { name: "ACTIONS", uid: "actions" },
];

const CompaniesTable = ({ companies }: { companies: Company[] }) => {
  const { setEditCompanyData } = useCompanyStore((state) => state);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const renderCell = (company: Company, columnKey: string) => {
    const cellValue = company[columnKey];
    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Edit company">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={async () => {
                  setEditCompanyData(company);
                  onOpen();
                }}
              >
                <TbEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete company">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={async () => await handleDeleteCompany(company.id)}
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
        <TableBody items={companies}>
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
      <EditCompanyModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default CompaniesTable;
