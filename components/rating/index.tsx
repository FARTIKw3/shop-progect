import ReviewsPreview from "../reviews";
import { StarRating } from "../starRating";

import styles from "./styles.module.css";
import Image from "next/image";

export default function Rating() {
  return (
    <>
      <div className={styles.review}>
        <div className={styles.review__content}>
          <h2 className={styles.review__title}>Оставьте свой короткий отзыв</h2>
          <form className={styles.review__form}>
            <textarea
              className={styles.review__textarea}
              placeholder="Ваш отзыв (до 300 символов)"
              maxLength={300}
            ></textarea>
            <StarRating />
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
        <ReviewsPreview />
      </div>
    </>
  );
}
