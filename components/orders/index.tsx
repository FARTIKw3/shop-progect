"use client";
import Image from "next/image";
import styles from "./style.module.css";
import clsx from "clsx";
import { useOrder } from "@/store/orders";
import { IoMdClose } from "react-icons/io";
import { OrderForm } from "../orderForm";
import { useEffect, useState } from "react";
import { isAuth } from "@/lib/server-helper";

interface IModalProps {
  isOrder: boolean;
  close: () => void;
}

export const Order = ({ isOrder, close }: IModalProps) => {
  const [formOpen, setFormOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { circle, removeOrderItem } = useOrder();

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isAuth();
      setIsLoggedIn(loggedIn);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (circle.length === 0) close();
  }, [circle]);

  const handleOrderClick = () => {
    if (isLoggedIn) {
      setFormOpen(true);
      setErrorMessage(null);
    } else {
      setErrorMessage("Вы не авторизованы.");
    }
  };

  return (
    <>
      <div className={clsx(styles.container, isOrder && styles.active)}>
        <div className={styles.header}>
          {circle.map((item, index) => (
            <div className={styles.imgCon} key={index}>
              <Image
                className={styles.img}
                src={`http://localhost:1337${item.image[0]?.url}`}
                width={100}
                height={100}
                alt="img"
              />
              <button
                className={styles.removeBtn}
                onClick={() => removeOrderItem(item.id)}
              >
                <IoMdClose size={26} />
              </button>
            </div>
          ))}
        </div>
        <div>
          <button className={styles.btn} onClick={handleOrderClick}>
            Оформить заказ
          </button>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
      </div>

      {formOpen && (
        <OrderForm formOpen={formOpen} closeForm={() => setFormOpen(false)} />
      )}
    </>
  );
};
