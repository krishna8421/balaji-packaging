import ThemeSwitcher from "@/components/theme-switcher";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";

export default function Home() {
  return (
    <main className="p-2 flex flex-col gap-6 justify-center items-center mt-40">
      <Link
        href="/admin"
        className="w-96 border-2 cursor-pointer text-center rounded-lg border-neutral-400 dark:border-neutral-600 hover:bg-neutral-900/65 py-8"
      >
        <span>Admin</span>
      </Link>
      or
      <Link
        href="/order"
        className="w-96 border-2 cursor-pointer text-center rounded-lg border-neutral-400 dark:border-neutral-600 hover:bg-neutral-900/65 py-8"
      >
        <span>Place Order</span>
      </Link>
    </main>
  );
}
