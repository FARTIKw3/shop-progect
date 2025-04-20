import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface OrderItem {
  id: number;
  url: string;
}

type State = {
  circle: OrderItem[];
};

type Actions = {
  addOrderItem: (good: OrderItem) => void;
  removeOrderItem: (id: number) => void;
  clearOrder: () => void;
};

export const useOrder = create<State & Actions>()(
  devtools(
    immer((set) => ({
      circle: [],
      addOrderItem: (good) =>
        set((state) => {
          const exists = state.circle.some((item) => item.id === good.id);
          if (!exists) {
            state.circle.push(good);
          }
        }),
      removeOrderItem: (id) =>
        set((state) => {
          state.circle = state.circle.filter((item) => item.id !== id);
        }),
      clearOrder: () =>
        set((state) => {
          state.circle = [];
        }),
    }))
  )
);
