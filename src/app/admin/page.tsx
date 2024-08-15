import { authenticate, getServerAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  await authenticate();
  redirect("/admin/all-orders");
};

export default AdminPage;
