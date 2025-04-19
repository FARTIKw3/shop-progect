"use client";
import Image from "next/image";
import styles from "./style.module.css";
import clsx from "clsx";
import { useOrder } from "@/store/orders";
import { IoMdClose } from "react-icons/io";
import { OrderForm } from "../orderForm";
import { useState } from "react";
interface IModalProps {
  isOrder: boolean;
}
export const Order = ({ isOrder }: IModalProps) => {
  const [formOpen, setFormOpen] = useState(false);
  const { circle, removeOrderItem } = useOrder();

  const closeForm = () => setFormOpen(!formOpen);

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
          <button className={styles.btn} onClick={() => setFormOpen(true)}>
            Оформить заказ
          </button>
        </div>
      </div>
      <OrderForm formOpen={formOpen} closeForm={closeForm} />
    </>
  );
};
