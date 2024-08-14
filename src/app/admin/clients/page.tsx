import AddClientForm from "./add-client-form";
import ClientsTable from "./clients-table";
import { db } from "@/lib/db";

const ClientsPage = async () => {
  const clients = await db.client.findMany();

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-semibold">Clients</h1>
      {clients.length > 0 && <ClientsTable clients={clients} />}
      <span className="text-lg">Add new client</span>
      <AddClientForm />
    </div>
  );
};

export default ClientsPage;
