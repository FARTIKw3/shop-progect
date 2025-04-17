"use client";
import Image from "next/image";
import { Navigation } from "../navigation";
import styles from "./style.module.css";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { logout } from "@/lib/server-helper";
import { useRouter } from "next/navigation";
import { SingUp } from "../singUp";
import { Login } from "../login";

export const Header = ({ isLoggedIn }) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const closeRegister = () => setIsOpenRegister(!isOpenRegister);
  const closeLogin = () => setIsOpenLogin(!isOpenLogin);

  const close = () => setIsActive(!isActive);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/svg/Logo.svg" width={100} height={36} alt="Logo" />
      </div>
      <Navigation isActive={isActive} close={close} />
      <div className={styles.userInterface}>
        <div className={clsx(styles.box, isActive && styles.absolute)}>
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
        <Link
          href="/basket"
          className={clsx(styles.favorite, isActive && styles.hidden)}
        >
          <Image src="/svg/basket.svg" width={30} height={30} alt="basket" />
        </Link>
        <Link
          href="/favorite"
          className={clsx(styles.favorite, isActive && styles.hidden)}
        >
          <Image
            src="/svg/favorite.svg"
            width={30}
            height={30}
            alt="favorite"
          />
        </Link>
        {isLoggedIn ? (
          <div
            className={clsx(styles.userProfile, isActive && styles.userActive)}
          >
            <Image
              src="/userPhoto.jpg"
              width={50}
              height={50}
              alt="userPhoto."
            />
            <button onClick={handleLogout}>Выйти</button>
          </div>
        ) : (
          <div
            className={clsx(styles.authBtn, isActive && styles.authBtnAtive)}
          >
            <button onClick={closeLogin} className={styles.login}>
              Вход{" "}
            </button>
            <button onClick={closeRegister} className={styles.register}>
              Регистрация{" "}
            </button>
          </div>
        )}
      </div>
      <SingUp isOpen={isOpenRegister} setIsOpen={setIsOpenRegister} />
      <Login isOpen={isOpenLogin} setIsOpen={setIsOpenLogin} />
    </div>
  );
};
