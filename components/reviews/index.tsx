import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { renderStars } from "../starsRender";
// import { IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";

export const reviews = [
  {
    id: 1,
    name: "Claus Smith",
    date: "03.12.2023",
    rating: 4,
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
    avatar: "/claus.png",
  },
  {
    id: 2,
    name: "Claus Smith",
    date: "03.12.2023",
    rating: 2,
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
    avatar: "/claus.png",
  },
  {
    id: 3,
    name: "Claus Smith",
    date: "03.12.2023",
    rating: 5,
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
    avatar: "/claus.png",
  },
  {
    id: 4,
    name: "Claus Smith",
    date: "03.12.2023",
    rating: 4,
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
    avatar: "/claus.png",
  },
  {
    id: 5,
    name: "Claus Smith",
    date: "03.12.2023",
    rating: 4,
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
    avatar: "/claus.png",
  },
  {
    id: 6,
    name: "Claus Smith",
    date: "03.12.2023",
    rating: 4,
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
    avatar: "/claus.png",
  },
];
export default function ReviewsPreview() {
  return (
    <div className={styles.reviews}>
      <h2 className={styles.reviews__title}>Что люди говорят о нас?</h2>
      <div className={styles.reviews__list}>
        {reviews.map((review) => (
          <div className={styles.reviews__card} key={review.id}>
            <div className={styles.reviews__user}>
              <Image
                className={styles.reviews__avatar}
                src="/claus.png"
                alt="avatar"
                width={65}
                height={65}
              />
              <div className={styles.reviews__info}>
                <p className={styles.reviews__name}>{review.name}</p>
                <p className={styles.reviews__date}>{review.date}</p>
              </div>
            </div>
            <div className={styles.reviews__stars}>
              {renderStars(review.rating)}
            </div>
            <p className={styles.reviews__text}>{review.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.link}>
        <Link href="/reviews" className={styles.reviews__link}>
          <span className={styles.reviews__linkContent}>
            посмотреть все отзывы{" "}
            <IoArrowForwardSharp className={styles.review__arrow} size={18} />
          </span>
        </Link>
      </div>
    </div>
  );
}
