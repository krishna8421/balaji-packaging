import AdminEmailChip from "./admin-email-chip";
import { db } from "@/lib/db";
import { handleRemoveAdminEmail } from "./actions";
import AddAdminsForm from "./add-admins-form";

const AdminsPage = async () => {
  const admins = await db.adminEmail.findMany({
    select: {
      id: true,
      email: true,
    },
  });

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-semibold">Admins</h1>
      <div className="flex flex-wrap gap-4">
        {admins.map((admin) => (
          <AdminEmailChip
            key={admin.email}
            email={admin.email}
            id={admin.id}
            onRemove={handleRemoveAdminEmail}
          />
        ))}
      </div>
      <AddAdminsForm />
    </div>
  );
};

export default AdminsPage;
