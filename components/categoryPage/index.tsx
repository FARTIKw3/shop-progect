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
import clsx from "clsx";
import { FaCheck } from "react-icons/fa";
import { Modal } from "../modal";

export const CategoryPage = ({ allGood }: { allGood: IProduct[] }) => {
  const [slideGood] = useState<IProduct[]>(allGood);
  const [isOpen, setIsOpen] = useState(false);

  const { addBasketItem } = useBasket();
  const { favorite, addFavorite } = useFavorite();
  const API_URL =
    process.env.NEXT_PUBLIC_STRAPI_API ||
    "http://strapi-progect-shop-production.up.railway.app";
  const closeModal = () => setIsOpen(!isOpen);

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
                src={`${API_URL}${item.image[0]?.url}`}
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
              <div className={styles.btnFavor}>
                <button
                  className={styles.btnw}
                  onClick={() => addFavorite(item)}
                >
                  <div
                    className={clsx(
                      styles.icon,
                      favorite.some((fave) => fave.id === item.id) &&
                        styles.active
                    )}
                  >
                    <TbBookmark size={22} />
                  </div>
                  <div
                    className={clsx(
                      styles.icon,
                      favorite.some((fave) => fave.id === item.id) &&
                        styles.active
                    )}
                  >
                    Добавить в избранное
                  </div>
                  <div
                    className={clsx(
                      styles.cheackBox,
                      favorite.some((fave) => fave.id === item.id) &&
                        styles.check
                    )}
                  >
                    <FaCheck size={20} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      <Modal isOpen={isOpen} closeModal={closeModal} />s
    </div>
  );
};
