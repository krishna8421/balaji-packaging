import ThemeSwitcher from "@/components/theme-switcher";
import Link from "next/link";
import NavDropdownMenu from "./nav-dropdown-menu";
import { getServerAuthSession } from "@/lib/auth";

const NavBar = async () => {
  const session = await getServerAuthSession();

  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="font-platypi font-bold text-lg">
        Balaji Packaging
      </Link>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        {session?.user?.email && session?.user?.name && (
          <NavDropdownMenu
            name={session.user.name}
            email={session.user.email}
            image={session.user.image ?? ""}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
