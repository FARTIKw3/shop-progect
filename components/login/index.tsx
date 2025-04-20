"use client";
import clsx from "clsx";
import styles from "./style.module.css";
import { loginActions } from "@/actions/login.action";
interface ILoginProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export const Login = ({ isOpen, setIsOpen }: ILoginProps) => {
  const closeModal = () => setIsOpen(false);

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
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Вход</h1>
              <span className={styles.span}>Добро пожаловать в наш Shop!</span>
            </div>
            <form action={loginActions} className={styles.form}>
              <div className={styles.labelCont}>
                <label htmlFor="email" className={styles.label}>
                  Enter your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="E-mail"
                />
              </div>
              <div className={styles.labelCont}>
                <label htmlFor="password" className={styles.label}>
                  Enter your password
                </label>
                <input
                  type="password"
                  id="password"
                  className={styles.input}
                  name="password"
                />
              </div>
              <div className={styles.inputContainer}></div>
              <div className={styles.btnblock}>
                <button
                  className={styles.formBtn}
                  onClick={closeModal}
                  type="submit"
                >
                  Вход
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
