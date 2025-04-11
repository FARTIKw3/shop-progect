"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { fetchProductById } from "@/api/strapi";
import { IProduct } from "@/interfaces/strapiData";
import Image from "next/image";

interface IModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ isOpen, closeModal }: IModalProps) => {
  return (
    <>
      <div
        className={clsx(styles.modal, isOpen && styles.active)}
        onClick={closeModal}
      >
        <div
          className={clsx(styles.content, isOpen && styles.active)}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <h1 className={styles.title}>Информация о товаре</h1>
          </div>
          <div className={styles.borderBotom}></div>
          <div>
            <Image src="/modalCart.jpg" width={720} height={300} alt="img" />
          </div>

          <div>
            <h2 className={styles.title2}>MacBook M1</h2>
            <p className={styles.paragh}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>
          </div>
          <div>
            <h2 className={styles.title2}>Характеристика:</h2>
            <ul className={styles.list}>
              <li>
                Процессор:<span className={styles.span}> Intel Core i7</span>{" "}
              </li>
              <li>
                Оперативная память:{" "}
                <span className={styles.span}>16 ГБ DDR4</span>
              </li>
              <li>
                Жесткий диск: <span className={styles.span}>512 ГБ SSD</span>
              </li>
              <li>
                Графика:{" "}
                <span className={styles.span}>NVIDIA GeForce GTX 1660 Ti</span>
              </li>
              <li>
                Экран: <span className={styles.span}>15,6 дюймов, Full HD</span>
              </li>
              <li>
                ОС: <span className={styles.span}>Windows 10</span>
              </li>
              <li>
                Порты: <span className={styles.span}>USB 3.0, USB-C, HDMI</span>
              </li>
              <li>
                Батарея:<span className={styles.span}> До 8 часов</span>
              </li>
              <li>
                Беспроводные технологии:
                <span className={styles.span}> Wi-Fi 6, Bluetooth 5.0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
