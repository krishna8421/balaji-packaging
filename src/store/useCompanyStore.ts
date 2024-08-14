import { Company } from "@/types";
import { create } from "zustand";

interface CompanyState {
  editCompanyData: Partial<Company>;
  setEditCompanyData: (
    companyData:
      | Partial<Company>
      | ((prev: Partial<Company>) => Partial<Company>)
  ) => void;
}

export const useCompanyStore = create<CompanyState>((set) => ({
  editCompanyData: {},

  setEditCompanyData: (companyData) => {
    set((state) => ({
      editCompanyData:
        typeof companyData === "function"
          ? companyData(state.editCompanyData)
          : companyData,
    }));
  },
}));
