import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface BasketItem {
  id: number;
  name: string;
  description: string;
  url: string;
}

type State = {
  cart: BasketItem[];
};

type Actions = {
  addBasketItem: (good: BasketItem) => void;
  removeBasketItem: (id: number) => void;
};

export const useBasket = create<State & Actions>()(
  devtools(
    immer((set) => ({
      cart: [],
      addBasketItem: (good) =>
        set((state) => {
          state.cart.push(good);
        }),
      removeBasketItem: (id) =>
        set((state) => {
          const index = state.cart.findIndex((item) => item.id === id);
          if (index !== -1) {
            state.cart.splice(index, 1);
          }
        }),
    }))
  )
);
