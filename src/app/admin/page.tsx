import { authenticate, getServerAuthSession } from "@/lib/auth";
import { Button } from "@nextui-org/button";

const AdminPage = async () => {
  await authenticate();
  const session = await getServerAuthSession();

  return (
    <div>
      <h1>Admin Page</h1>
      <Button color="secondary" variant="solid">
        Solid
      </Button>
    </div>
  );
};

export default AdminPage;
