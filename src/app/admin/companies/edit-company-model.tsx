"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useCompanyStore } from "@/store/useCompanyStore";
import { handleEditCompany } from "./actions";
import { toast } from "sonner";

interface IProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function EditCompanyModal({ isOpen, onOpenChange }: IProps) {
  const { editCompanyData, setEditCompanyData } = useCompanyStore(
    (state) => state
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditCompanyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Edit Company
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Name"
                name="name"
                value={editCompanyData.name || ""}
                onChange={handleChange}
                placeholder="Enter company's name"
                variant="bordered"
              />
              <Input
                label="Email"
                name="email"
                value={editCompanyData.email || ""}
                onChange={handleChange}
                placeholder="Enter company's email"
                variant="bordered"
              />
              <Input
                label="Address"
                name="address"
                value={editCompanyData.address || ""}
                onChange={handleChange}
                placeholder="Enter company's address"
                variant="bordered"
              />
              <Input
                label="Phone"
                name="phone"
                value={editCompanyData.phone || ""}
                onChange={handleChange}
                placeholder="Enter company's phone"
                variant="bordered"
              />
              <Input
                label="GST Number"
                name="gstNumber"
                value={editCompanyData.gstNumber || ""}
                onChange={handleChange}
                placeholder="Enter company's GST number"
                variant="bordered"
              />
              <Input
                label="Postal Code"
                name="postalCode"
                value={editCompanyData.postalCode || ""}
                onChange={handleChange}
                placeholder="Enter company's postal code"
                variant="bordered"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="ghost" onPress={onClose}>
                Discard
              </Button>
              <Button
                color="success"
                variant="ghost"
                onPress={async () => {
                  onOpenChange();
                  const res = await handleEditCompany(editCompanyData);
                  if (res.success) {
                    toast.success(res.msg);
                  } else {
                    toast.error(res.msg);
                  }
                }}
              >
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
