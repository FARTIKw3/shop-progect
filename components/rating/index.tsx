"use client";
import { useState } from "react";
import ReviewsPreview from "../reviews";
import { StarRating } from "../starRating";
import styles from "./styles.module.css";
import Image from "next/image";
import { IReview } from "@/interfaces/strapiData";

export default function Rating({ data }: { data: IReview[] }) {
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Проверяем, что описание и рейтинг введены
    if (!description.trim() || rating === null) return;

    try {
      // Отправляем POST-запрос на сервер
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, rating }), // Отправляем описание и рейтинг
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Ошибка при отправке отзыва");
        return;
      }

      // Если отзыв отправлен успешно, очищаем поля
      setDescription("");
      setRating(null);
      alert("Отзыв опубликован!");
    } catch (error) {
      console.error("error", error);
      alert("Ошибка сети");
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
            />
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
