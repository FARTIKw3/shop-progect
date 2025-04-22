"use client";
import { useEffect, useState } from "react";
import ReviewsPreview from "../reviews";
import { StarRating } from "../starRating";
import styles from "./styles.module.css";
import Image from "next/image";
import { fetchProfile, postReview } from "@/api/strapi";
import { getToken, isAuth } from "@/lib/server-helper";
import { IReview } from "@/interfaces/strapiData";

export default function Rating({ data }: { data: IReview[] }) {
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isAuth();
      setIsLoggedIn(loggedIn);
    };
    checkAuth();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loggedIn = await isAuth();
    if (!loggedIn) {
      alert("Войдите, чтобы оставить отзыв");
      return;
    }

    if (!description.trim() || rating === null) return;

    try {
      const token = await getToken();
      if (!token) {
        console.log("Токен не найден");
        return;
      }

      const user = await fetchProfile(token);
      if (!user?.username) {
        console.log("Имя пользователя не найдено");
        return;
      }

      await postReview({ description, rating, username: user.username });

      setDescription("");
      setRating(null);
      alert("Отзыв опубликован");
    } catch (error) {
      console.error("Ошибка при отправке отзыва", error);
    }
  };

  return (
    <>
      <div className={styles.review}>
        <div className={styles.review__content}>
          <h2 className={styles.review__title}>Оставьте свой короткий отзыв</h2>
          <form className={styles.review__form} onSubmit={handleSubmit}>
            <textarea
              className={styles.review__textarea}
              placeholder="Ваш отзыв (до 300 символов)"
              maxLength={300}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <StarRating onChange={(value) => setRating(value)} value={rating} />
            <button className={styles.review__button} type="submit">
              Опубликовать
            </button>
          </form>
        </div>
        <div className={styles.review__imageBlock}>
          <Image
            src="/rating.png"
            alt="review"
            className={styles.review__image}
            width={640}
            height={416}
          />
        </div>
      </div>
      <div className={styles.review__list}>
        <h3 className={styles.list__title}>Отзывы</h3>
        {data && <ReviewsPreview data={data} />}
      </div>
    </>
  );
}
