import AddClientForm from "./add-client-form";
import ClientsTable from "./clients-table";
import { db } from "@/lib/db";

const ClientsPage = async () => {
  const clients = await db.client.findMany();

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-semibold">Clients</h1>
      {clients.length > 0 && <ClientsTable clients={clients} />}
      <div className="flex flex-col gap-8 items-center w-full">
        <span className="text-lg font-semibold">Add new client</span>
        <AddClientForm />
      </div>
    </div>
  );
};

export default ClientsPage;
