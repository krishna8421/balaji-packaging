import { authenticate, getServerAuthSession } from "@/lib/auth";
import Link from "next/link";

const AdminPage = async () => {
  await authenticate();
  const session = await getServerAuthSession();

  return (
    <div className="flex gap-6 justify-center flex-wrap">
      <Link
        href="/admin/admins"
        className="h-32 w-40 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-900/65 flex justify-center items-center rounded-lg hover:bg-neutral-100/65 cursor-pointer"
      >
        Admins
      </Link>
      <Link
        href="/admin/"
        className="h-32 w-40 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-900/65 flex justify-center items-center rounded-lg hover:bg-neutral-100/65 cursor-pointer"
      >
        Orders
      </Link>
      <Link
        href="/admin/companies"
        className="h-32 w-40 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-900/65 flex justify-center items-center rounded-lg hover:bg-neutral-100/65 cursor-pointer"
      >
        Companies
      </Link>
      <Link
        href="/admin/clients"
        className="h-32 w-40 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-900/65 flex justify-center items-center rounded-lg hover:bg-neutral-100/65 cursor-pointer"
      >
        Clients
      </Link>
      <Link
        href="/admin/orders-placed"
        className="h-32 w-40 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-900/65 flex justify-center items-center rounded-lg hover:bg-neutral-100/65 cursor-pointer"
      >
        Orders Placed
      </Link>
      <Link
        href="/admin/orders-received"
        className="h-32 w-40 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-900/65 flex justify-center items-center rounded-lg hover:bg-neutral-100/65 cursor-pointer"
      >
        Orders Received
      </Link>
    </div>
  );
};

export default AdminPage;
