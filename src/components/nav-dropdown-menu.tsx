"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface NavDropdownMenuProps {
  email: string;
  image: string;
  name: string;
}

const NavDropdownMenu = ({ email, image, name }: NavDropdownMenuProps) => {
  const router = useRouter();

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
        <DropdownItem
          onClick={() => router.push("/admin/all-orders")}
          key="orders"
        >
          All Orders
        </DropdownItem>
        <DropdownItem onClick={() => router.push("/admin/admins")} key="admins">
          Admins
        </DropdownItem>
        <DropdownItem
          onClick={() => router.push("/admin/companies")}
          key="companies"
        >
          Companies
        </DropdownItem>
        <DropdownItem
          onClick={() => router.push("/admin/clients")}
          key="clients"
        >
          Clients
        </DropdownItem>
        <DropdownItem
          onClick={() => router.push("/admin/orders-placed")}
          key="orders-placed"
        >
          Orders Placed
        </DropdownItem>
        <DropdownItem
          onClick={() => router.push("/admin/orders-received")}
          key="orders-received"
        >
          Orders Received
        </DropdownItem>
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
