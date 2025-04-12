"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import { Modal } from "../modal";

export const BasketPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(!isOpen);
  return (
    <>
      <div className={styles.container}>
        <div>
          <div>
            <h1 className={styles.title}>Ваша корзина</h1>
          </div>
          <div>SEARCH</div>
        </div>
        <div className={styles.cartContainer}>
          <div className={styles.cart}>
            <div>
              <Image
                src="/cartLaptop.jpg"
                width={260}
                height={173}
                alt="cart"
              />
            </div>
            <div>
              <h2 className={styles.title}>sdasda</h2>
            </div>
            <p className={styles.paragh}>sdasd</p>
            <div className={styles.cont}>
              <div className={styles.btn}>
                <button className={styles.btnw} onClick={() => setIsOpen(true)}>
                  <div className={styles.icon}>
                    <AiOutlineInfoCircle size={22} />
                  </div>
                  <div>Полная информация</div>
                </button>
              </div>
            </div>
          </div>
          <Modal isOpen={isOpen} closeModal={closeModal} />
        </div>
      </div>
    </>
  );
};
