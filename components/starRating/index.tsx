"use client";
import { useState } from "react";
import styles from "./style.module.css";
import { IoStarSharp } from "react-icons/io5";
import clsx from "clsx";

export const StarRating = () => {
  const [currentItem, setCurrentItem] = useState<number | null>();
  const [hoverItem, setHoverItem] = useState<number | null>(null);

  return (
    <div className={styles.starContainer}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={clsx(styles.star, {
            [styles.active]:
              hoverItem !== null
                ? index <= hoverItem
                : index <= (currentItem ?? -1),
          })}
          onMouseEnter={() => setHoverItem(index)}
          onMouseLeave={() => setHoverItem(null)}
          onClick={() => setCurrentItem(index)}
        >
          <IoStarSharp />
        </div>
      ))}
    </div>
  );
};
