import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface FavoriteItem {
  id: number;
  name: string;
  description: string;
  url: string;
}

type State = {
  favorite: FavoriteItem[];
};

type Actions = {
  addFavorite: (good: FavoriteItem) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (good: FavoriteItem) => void;
};

export const useFavorite = create<State & Actions>()(
  devtools(
    immer((set) => ({
      favorite: [],
      addFavorite: (good) =>
        set((state) => {
          if (!state.favorite.some((item) => item.id === good.id)) {
            state.favorite.push(good);
          }
        }),
      removeFavorite: (id) =>
        set((state) => {
          state.favorite = state.favorite.filter((item) => item.id !== id);
        }),
      toggleFavorite: (good) =>
        set((state) => {
          const isInFavorite = state.favorite.some(
            (item) => item.id === good.id
          );
          if (isInFavorite) {
            state.favorite = state.favorite.filter(
              (item) => item.id !== good.id
            );
          } else {
            state.favorite.push(good);
          }
        }),
    }))
  )
);
