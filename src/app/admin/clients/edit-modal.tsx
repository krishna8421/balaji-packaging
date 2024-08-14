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
import { useClientStore } from "@/store/useClientStore";
import { handleEditClient } from "./actions";
import { toast } from "sonner";

interface IProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function EditModal({ isOpen, onOpenChange }: IProps) {
  const { editClientData, setEditClientData } = useClientStore(
    (state) => state
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditClientData((prev) => ({
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
              Edit Client
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Name"
                name="name"
                value={editClientData.name || ""}
                onChange={handleChange}
                placeholder="Enter client's name"
                variant="bordered"
              />
              <Input
                label="Email"
                name="email"
                value={editClientData.email || ""}
                onChange={handleChange}
                placeholder="Enter client's email"
                variant="bordered"
              />
              <Input
                label="Address"
                name="address"
                value={editClientData.address || ""}
                onChange={handleChange}
                placeholder="Enter client's address"
                variant="bordered"
              />
              <Input
                label="Phone"
                name="phone"
                value={editClientData.phone || ""}
                onChange={handleChange}
                placeholder="Enter client's phone"
                variant="bordered"
              />
              <Input
                label="GST Number"
                name="gstNumber"
                value={editClientData.gstNumber || ""}
                onChange={handleChange}
                placeholder="Enter client's GST number"
                variant="bordered"
              />
              <Input
                label="Postal Code"
                name="postalCode"
                value={editClientData.postalCode || ""}
                onChange={handleChange}
                placeholder="Enter client's postal code"
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
                  const res = await handleEditClient(editClientData);
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
