"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import { renderStars } from "../starsRender";
import { useEffect, useState } from "react";
import { IReview } from "@/interfaces/strapiData";
import { formatData } from "@/utils/formatData";

export default function ReviewsPreview({ data }: { data: IReview[] }) {
  const [rew, setRew] = useState(data || []);
  useEffect(() => {
    if (data) {
      setRew(data);
    }
  }, [data]);
  return (
    <>
      <div className={styles.reviews}>
        <h2 className={styles.reviews__title}>Что люди говорят о нас?</h2>
        {rew.length === 0 ? (
          <div>
            <h1>Нет ответа</h1>
          </div>
        ) : (
          <>
            <div className={styles.reviews__list}>
              {rew.map((item) => (
                <div className={styles.reviews__card} key={item.id}>
                  <div className={styles.reviews__user}>
                    <Image
                      className={styles.reviews__avatar}
                      src="/claus.png"
                      alt="avatar"
                      width={65}
                      height={65}
                    />
                    <div className={styles.reviews__info}>
                      <p className={styles.reviews__name}>{item.username}</p>
                      <p className={styles.reviews__date}>
                        {formatData(item.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className={styles.reviews__stars}>
                    {renderStars(item.rating)}
                  </div>
                  <p className={styles.reviews__text}>{item.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
