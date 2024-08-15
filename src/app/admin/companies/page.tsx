import AddCompanyForm from "./add-company-form";
import CompaniesTable from "./companies-table";
import { db } from "@/lib/db";

const CompanyPage = async () => {
  const companies = await db.company.findMany();

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-semibold">Companies</h1>
      {companies.length > 0 && <CompaniesTable companies={companies} />}
      <div className="flex flex-col gap-8 items-center w-full">
        <span className="text-lg font-semibold">Add new company</span>
        <AddCompanyForm />
      </div>
    </div>
  );
};

export default CompanyPage;
