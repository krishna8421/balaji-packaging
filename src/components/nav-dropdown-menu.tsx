"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";

interface NavDropdownMenuProps {
  email: string;
  image: string;
  name: string;
}

const NavDropdownMenu = ({ email, image, name }: NavDropdownMenuProps) => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          radius="md"
          as="button"
          className="transition-transform"
          src={image}
          showFallback
          name={name}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{email}</p>
        </DropdownItem>
        <DropdownItem key="orders">Orders</DropdownItem>
        <DropdownItem key="companies">Companies</DropdownItem>
        <DropdownItem key="clients">Clients</DropdownItem>
        <DropdownItem key="orders-placed">Orders Placed</DropdownItem>
        <DropdownItem key="orders-received">Orders Received</DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          onClick={() => {
            signOut();
          }}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavDropdownMenu;
