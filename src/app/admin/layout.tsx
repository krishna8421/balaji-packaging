import BackButton from "@/components/back-button";
import { authenticate } from "@/lib/auth";

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  await authenticate();
  return (
    <div>
      <BackButton />
      {children}
    </div>
  );
};

export default AdminLayout;
