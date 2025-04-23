"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import { Modal } from "../modal";
import { useFavorite } from "@/store/favorite";
import { CiCirclePlus } from "react-icons/ci";
import { useBasket } from "@/store/basket";
import { IoMdClose } from "react-icons/io";

export const FavoritePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { favorite, removeFavorite } = useFavorite();
  const { addBasketItem } = useBasket();

  const closeModal = () => setIsOpen(!isOpen);
  const API_URL =
    process.env.NEXT_PUBLIC_STRAPI_API ||
    "http://strapi-progect-shop-production.up.railway.app";

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.lol}>Ваши избранные</h1>
          </div>
          <div>
            <input
              type="search"
              placeholder="Поиск...."
              className={styles.input}
            />
          </div>
        </div>
        {favorite.length === 0 && (
          <div className={styles.clearCont}>
            <h1 className={styles.clearTitle}> Тут пуста</h1>
          </div>
        )}
        <div className={styles.cartContainer}>
          {favorite.map((item, index) => (
            <div className={styles.cart} key={index}>
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
                  <button
                    className={styles.btnw}
                    onClick={() => setIsOpen(true)}
                  >
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
              </div>
              <button
                type="button"
                title=""
                className={styles.removeBtn}
                onClick={() => removeFavorite(item.id)}
              >
                <IoMdClose size={26} />
              </button>
            </div>
          ))}
        </div>

        <Modal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
};
