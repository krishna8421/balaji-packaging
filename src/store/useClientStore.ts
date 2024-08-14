import { Client } from "@/types";
import { create } from "zustand";

interface ClientState {
  editClientData: Partial<Client>;
  setEditClientData: (clientData: Partial<Client> | ((prev: Partial<Client>) => Partial<Client>)) => void;
}

export const useClientStore = create<ClientState>((set) => ({
  editClientData: {},

  setEditClientData: (clientData) => {
    set((state) => ({
      editClientData: typeof clientData === "function" ? clientData(state.editClientData) : clientData,
    }));
  },
}));