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
          const exists = state.cart.some((item) => item.id === good.id);
          if (!exists) {
            state.cart.push(good);
          }
        }),
      removeBasketItem: (id) =>
        set((state) => {
          state.cart = state.cart.filter((item) => item.id !== id);
        }),
    }))
  )
);
