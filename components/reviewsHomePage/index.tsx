import Image from "next/image";
import styles from "./style.module.css";
import { reviews } from "./data";
import { formatData } from "@/utils/formatData";
import { renderStars } from "../starsRender";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

export const HomeReviews = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.reviews__title}>Что люди говорят о нас?</h2>
      <div className={styles.reviews__list}>
        {reviews.map((item) => (
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
      <Link href="/reviews" className={styles.link}>
        <div className={styles.reviews__link}>
          <div className={styles.reviews__linkContent}>
            <span>Посмотреть все отзывы</span>
          </div>
          <div className={styles.reviews__arrow}>
            <IoArrowForward size={34} />
          </div>
        </div>
      </Link>
    </div>
  );
};
