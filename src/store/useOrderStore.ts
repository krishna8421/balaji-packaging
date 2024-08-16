import { create } from "zustand";
import { OrderItem } from "@/types";

interface OrderState {
  orderItems: OrderItem[];
  updateOrderItem: (updatedOrderItem: OrderItem) => void;
  removeOrderItem: (orderItemId: string) => void;
  addOrderItem: () => void;
}

const emptyOrderItem: OrderItem = {
  id: "",
  name: "",
  gsm: "",
  quantity: "",
  isUrgent: false,
  sizeA: "",
  sizeB: "",
  sizeAUnit: "",
  sizeBUnit: "",
};

export const useOrderStore = create<OrderState>((set) => ({
  orderItems: [],
  updateOrderItem: (updatedOrderItem) => {
    set((state) => ({
      orderItems: state.orderItems.map((orderItem) =>
        orderItem.id === updatedOrderItem.id ? updatedOrderItem : orderItem
      ),
    }));
  },
  removeOrderItem: (orderItemId: string) => {
    set((state) => ({
      orderItems: state.orderItems.filter(
        (orderItem) => orderItem.id !== orderItemId
      ),
    }));
  },
  addOrderItem: () => {
    set((state) => ({
      orderItems: [
        ...state.orderItems,
        {
          ...emptyOrderItem,
          id: String(state.orderItems.length + 1),
        },
      ],
    }));
  },
}));
