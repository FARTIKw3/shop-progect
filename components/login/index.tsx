"use client";

import { useState, useTransition } from "react";
import clsx from "clsx";
import styles from "./style.module.css";
import { loginActions } from "@/actions/login.action";

interface ILoginProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Login = ({ isOpen, setIsOpen }: ILoginProps) => {
  const closeModal = () => setIsOpen(false);

  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    if (!email || !password) {
      setError("Заполните все поля");
      return;
    }

    setError("");

    startTransition(() => {
      loginActions(formData).then((res) => {
        if (res?.error) {
          setError(res.error);
        } else {
          setIsOpen(false);
        }
      });
    });
  };

  return (
    <div
      className={clsx(styles.modal, isOpen && styles.active)}
      onClick={closeModal}
    >
      <div
        className={clsx(styles.content, isOpen && styles.active)}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Вход</h1>
            <span className={styles.span}>Добро пожаловать в наш Shop!</span>
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <div className={styles.labelCont}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.input}
              placeholder="E-mail"
            />
          </div>
          <div className={styles.labelCont}>
            <label htmlFor="password" className={styles.label}>
              Пароль
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
              placeholder="Пароль"
            />
          </div>
          <div className={styles.btnblock}>
            <button
              className={styles.formBtn}
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Вход..." : "Войти"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
