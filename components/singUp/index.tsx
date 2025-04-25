"use client";

import clsx from "clsx";
import styles from "./style.module.css";
import Link from "next/link";
import { registerAction } from "@/actions/registrer.action";
import { useState } from "react";

type SingUpProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const SingUp = ({ isOpen, setIsOpen }: SingUpProps) => {
  const closeModal = () => setIsOpen(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { username, email, password, agree } = formData;
    if (!username || !email || !password || !agree) {
      setError("Все поля обязательны и нужно согласие.");
      return;
    }

    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);

    try {
      await registerAction(data);
      setError("");
      setFormData({
        username: "",
        email: "",
        password: "",
        agree: false,
      });
      setIsOpen(false);
    } catch (err) {
      console.error("Ошибка при регистрации:", err);
      setError("Произошла ошибка. Попробуйте ещё раз.");
    }
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
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Регистрация</h1>
          <span className={styles.span}>Добро пожаловать в наш Shop!</span>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.labelCont}>
            <label htmlFor="name" className={styles.label}>
              Enter your name
            </label>
            <input
              type="text"
              id="name"
              name="username"
              className={styles.input}
              placeholder="Name"
              value={formData.username}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.labelCont}>
            <label htmlFor="password" className={styles.label}>
              Enter your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree" className={styles.agreement}>
              I agree to the Google Terms of Service and have read the{" "}
              <Link href="" className={styles.link}>
                Privacy Policy
              </Link>
            </label>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className={styles.btnblock}>
            <button className={styles.formBtn} type="submit">
              Sign up
            </button>
            <span className={styles.agreement}>
              You have account?{" "}
              <Link href="" className={styles.link}>
                Let’s sign in!
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
