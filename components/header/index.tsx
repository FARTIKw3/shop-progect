"use client";
import Image from "next/image";
import { Navigation } from "../navigation";
import styles from "./style.module.css";
import clsx from "clsx";
import { useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const close = () => setIsActive(!isActive);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/svg/Logo.svg" width={100} height={36} alt="Logo" />
      </div>
      <Navigation isActive={isActive} close={close} />
      <div className={styles.userInterface}>
        <div>
          <button
            type="button"
            aria-label="menu"
            onClick={close}
            className={clsx(styles.hamburger, isActive && styles.isActive)}
          >
            <span className={styles.hamburgerBox}>
              <span className={styles.hamburgerInner}></span>
            </span>
          </button>
        </div>
        <div className={styles.basket}>
          <Image src="/svg/basket.svg" width={30} height={30} alt="basket" />
        </div>
        <div className={styles.favorite}>
          <Image
            src="/svg/favorite.svg"
            width={30}
            height={30}
            alt="favorite"
          />
        </div>
        <div
          className={clsx(styles.userProfile, isActive && styles.userActive)}
        >
          <Image src="/userPhoto.jpg" width={50} height={50} alt="userPhoto." />
        </div>
      </div>
    </div>
  );
};
