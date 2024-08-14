import { authenticate, getServerAuthSession } from "@/lib/auth";

const AdminPage = async () => {
  await authenticate();
  const session = await getServerAuthSession();

  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
};

export default AdminPage;
