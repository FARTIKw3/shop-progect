"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import { Modal } from "../modal";
import { useBasket } from "@/store/basket";
import { Control } from "@/shared/controls";
import { IoMdClose } from "react-icons/io";

export const BasketPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeBasketItem } = useBasket();

  const closeModal = () => setIsOpen(!isOpen);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.lol}>Ваша корзина </h1>
          </div>
          <div>
            <input
              type="search"
              placeholder="Поиск...."
              className={styles.input}
            />
          </div>
        </div>

        {cart.length === 0 && (
          <div className={styles.clearCont}>
            <h1 className={styles.clearTitle}> Ваша корзина пуста</h1>
          </div>
        )}
        <div className={styles.cartContainer}>
          {cart.map((item, index) => (
            <div className={styles.cart} key={index}>
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
                <button className={styles.checoutBtn}>Добавить к оплате</button>
              </div>
              <button
                className={styles.removeBtn}
                onClick={() => removeBasketItem(item.id)}
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
