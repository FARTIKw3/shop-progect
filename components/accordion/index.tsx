"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { GoPlus } from "react-icons/go";
import { GrClose } from "react-icons/gr";

interface Item {
  title: string;
  content: string;
}

export const data: Item[] = [
  {
    title: "О нас",
    content:
      "Мы - команда, стремящаяся создавать качественные цифровые продукты",
  },
  {
    title: "С кем мы сотрудничаем?",
    content: " Нашими партнерами являются ведущие компании в своих отраслях ",
  },
  {
    title: " Как мы работаем?",
    content:
      "Мы тщательно планируем, проектируем и разрабатываем каждый этап продукта",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.title}>Почему мы?</h2>
        <div className={styles.text_cont}>
          <p className={styles.text}>
            Lorem Ipsum - это текст-рыба, часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн.
          </p>
        </div>
      </div>
      {data.map((item, index) => (
        <div className={styles.accordion} key={index}>
          <div className={styles.item}>
            <button className={styles.plus} onClick={() => toggle(index)}>
              <span className={styles.item_title}> {item.title} </span>

              <span className={styles.icon}>
                {" "}
                {activeIndex === index ? (
                  <GrClose />
                ) : (
                  <GoPlus className={styles.GoPlus} />
                )}
              </span>
            </button>
          </div>
          <div
            className={`${styles.content} ${
              activeIndex === index ? styles.open : ""
            } `}
          >
            <p className={styles.paragh}>{item.content}</p>
          </div>
        </div>
      ))}
      <div className={styles.item}></div>
    </>
  );
}
