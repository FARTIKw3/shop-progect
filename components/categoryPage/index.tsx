"use client";
import { useState } from "react";
import styles from "./style.module.css";
import { IProduct } from "@/interfaces/strapiData";
import Image from "next/image";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useBasket } from "@/store/basket";
import { useFavorite } from "@/store/favorite";
import { CiCirclePlus } from "react-icons/ci";
import { TbBookmark } from "react-icons/tb";

export const CategoryPage = ({ allGood }: { allGood: IProduct }) => {
  const [slideGood, setSlideGood] = useState<IProduct[]>(allGood);
  const [isOpen, setIsOpen] = useState(false);
  const { addBasketItem } = useBasket();
  const { addFavorite } = useFavorite();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.lol}>Ноутбуки </h1>
        </div>

        <div>
          <input
            type="search"
            placeholder="Поиск...."
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.bottom}></div>
      <div className={styles.gridSetkaFixed}>
        {slideGood.map((item) => (
          <div className={styles.cart} key={item.id}>
            <div>
              <Image
                src={`http://localhost:1337${item.image[0]?.url}`}
                width={260}
                height={173}
                alt="cart"
              />
            </div>
            <div>
              <h2 className={styles.title}>{item.name}</h2>
            </div>
            <p className={styles.paragh}>{item.description}</p>
            <div className={styles.cont}>
              <div className={styles.btn}>
                <button className={styles.btnw} onClick={() => setIsOpen(true)}>
                  <div className={styles.icon}>
                    <AiOutlineInfoCircle size={22} />
                  </div>
                  <div>Полная информация</div>
                </button>
              </div>
              <div className={styles.btn}>
                <button
                  className={styles.btnw}
                  onClick={() => addBasketItem(item)}
                >
                  <div className={styles.icon}>
                    <CiCirclePlus size={22} />
                  </div>
                  <div>Добавить в корзину</div>
                </button>
              </div>
              <div className={styles.btn}>
                <button
                  className={styles.btnw}
                  onClick={() => addFavorite(item)}
                >
                  <div className={styles.icon}>
                    <TbBookmark size={22} />
                  </div>
                  <div>Добавить в избранное</div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
