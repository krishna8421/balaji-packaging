import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";

export default function Home() {
  return (
    <main className="p-2 flex flex-col gap-6 justify-center items-center mt-8">
      <Link
        href="/order"
        className="w-96 flex flex-col items-center gap-4 border-2 cursor-pointer rounded-lg text-neutral-800 dark:text-neutral-300 border-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-900/65 hover:bg-neutral-100/65 py-16"
      >
        <FaCartShopping className="" size={32} />
        <span className="text-xl font-platypi font-bold">Place Order</span>
      </Link>
      or
      <Link
        href="/admin"
        className="w-96 flex flex-col items-center gap-4 border-2 cursor-pointer rounded-lg text-neutral-800 dark:text-neutral-300 border-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-900/65 hover:bg-neutral-100/65 py-16"
      >
        <MdAdminPanelSettings className="" size={32} />
        <span className="text-xl font-platypi font-bold">Admin Panel</span>
      </Link>
    </main>
  );
}
