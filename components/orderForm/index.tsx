"use client";
import clsx from "clsx";
import styles from "./style.module.css";
import { useOrder } from "@/store/orders";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { postOrder } from "@/api/strapi";
interface FormProps {
  formOpen: boolean;
  closeForm: any;
}

export const OrderForm = ({ formOpen, closeForm }: FormProps) => {
  const { circle, removeOrderItem, clearOrder } = useOrder();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    number: "",
    email: "",
    country: "",
    city: "",
    street: "",
    mailIndex: "",
  });
  useEffect(() => {
    if (circle.length === 0) {
      closeForm();
    }
  }, [circle]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postOrder(formData);
      alert("Заказ успешно отправлен");
      clearOrder();
      closeForm();
    } catch (error) {
      console.log("Ошибка", error);
    }
  };

  return (
    <>
      <div className={clsx(styles.modal, formOpen && styles.active)}>
        <div
          className={clsx(styles.content, formOpen && styles.active)}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.container}>
            <h1 className={styles.title}>Оформление заказа</h1>
            <div className={styles.borderBottom}></div>
            <div className={styles.containerGood}>
              <div className={styles.contSpan}>
                <span className={styles.span}>Ваш список товаров</span>
              </div>
              <div className={styles.goods}>
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
                      title="button"
                      className={styles.removeBtn}
                      onClick={() => removeOrderItem(item.id)}
                    >
                      <IoMdClose size={26} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
              <div>
                <span className={styles.span}>Получатель:</span>
              </div>
              <div className={styles.userInfo}>
                <div className={styles.contInput}>
                  <label className={styles.label} htmlFor="name">
                    Имя:
                  </label>
                  <input
                    className={styles.input}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Имя"
                  />
                </div>
                <div className={styles.contInput}>
                  <label className={styles.label} htmlFor="lastname">
                    Фамилия:
                  </label>
                  <input
                    className={styles.input}
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Фамилия"
                  />
                </div>
              </div>
              <div className={styles.userInfo}>
                <div className={styles.contInput}>
                  <label className={styles.label} htmlFor="number">
                    Номер телефона:
                  </label>
                  <input
                    className={styles.input}
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+996 000 00 00 00"
                  />
                </div>
                <div className={styles.contInput}>
                  <label className={styles.label} htmlFor="email">
                    E-mail::
                  </label>
                  <input
                    className={styles.input}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div>
                <span className={styles.span}>Адрес:</span>
              </div>
              <div className={styles.userInfo}>
                <div className={styles.contInput}>
                  <label className={styles.label} htmlFor="country">
                    Страна:
                  </label>
                  <input
                    className={styles.input}
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    type="text"
                    placeholder="Страна"
                  />
                </div>
                <div className={styles.contInput}>
                  <label className={styles.label} htmlFor="city">
                    Город:
                  </label>
                  <input
                    className={styles.input}
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    type="text"
                    placeholder="Бишкек"
                  />
                </div>
              </div>
              <div className={styles.userInfo}>
                <div className={styles.contInput}>
                  <label className={styles.label} htmlFor="street">
                    Адрес::
                  </label>
                  <input
                    className={styles.input}
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    type="text"
                    placeholder="Пушкина 80"
                  />
                </div>
                <div className={styles.contInput}>
                  <label className={styles.label} htmlFor="Mail">
                    Почтовый индекс::
                  </label>
                  <input
                    className={styles.input}
                    name="mailIndex"
                    value={formData.mailIndex}
                    onChange={handleChange}
                    type="text"
                    placeholder="00000"
                  />
                </div>
              </div>
              <div className={styles.borderBottom}></div>
              <div>
                {" "}
                <div className={styles.contInput}>
                  <span className={styles.span}>Выберите способ оплаты:</span>
                  <select
                    id="payment"
                    name="payment"
                    className={styles.payment}
                    title="payment"
                  >
                    <option>Банковская карта</option>
                    <option>Наличные</option>
                    <option>PayPal</option>
                  </select>
                </div>
                <div className={styles.controls}>
                  <button
                    className={styles.closeBtn}
                    onClick={closeForm}
                    type="button"
                  >
                    Закрыть
                  </button>
                  <button className={styles.payBtn} type="submit">
                    Оплатить
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
