"use client";
import clsx from "clsx";
import styles from "./style.module.css";
import Link from "next/link";
import { registerAction } from "@/actions/registrer.action";
type SingUpProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
export const SingUp = ({ isOpen, setIsOpen }: SingUpProps) => {
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
              <h1 className={styles.title}>Регистрация</h1>
              <span className={styles.span}>Добро пожаловать в наш Shop!</span>
            </div>
            <form action={registerAction} className={styles.form}>
              <div className={styles.labelCont}>
                <label htmlFor="name" className={styles.label}>
                  Enter your name
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.input}
                  placeholder="Name"
                  name="username"
                />
              </div>
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
              <div className={styles.inputContainer}>
                <div>
                  <input
                    type="checkbox"
                    id="password"
                    className={styles.input}
                  />
                </div>
                <div>
                  <span className={styles.agreement}>
                    I agree to the Google Terms of Service and have read the
                    <Link href={""} className={styles.link}>
                      {" "}
                      Privacy Policy.
                    </Link>
                  </span>
                </div>
              </div>
              <div className={styles.btnblock}>
                <button className={styles.formBtn} type="submit">
                  Sign up
                </button>
                <span className={styles.agreement}>
                  You have account?{" "}
                  <Link href={""} className={styles.link}>
                    Let’s sign in!
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
