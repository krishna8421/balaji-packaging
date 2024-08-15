// import BackButton from "@/components/back-button";
import Sidebar from "@/components/sidebar";
import { authenticate } from "@/lib/auth";

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  await authenticate();
  return (
    <div className="">
      {/* <BackButton /> */}
      <div className="flex gap-8 mt-4">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
