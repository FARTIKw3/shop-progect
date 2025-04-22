"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { IoStarSharp } from "react-icons/io5";
import clsx from "clsx";

export const StarRating = ({
  onChange,
  value,
}: {
  onChange?: (value: number) => void;
  value?: number | null;
}) => {
  const [currentItem, setCurrentItem] = useState<number | null>(value ?? null);
  const [hoverItem, setHoverItem] = useState<number | null>(null);

  useEffect(() => {
    if (value === null) {
      setCurrentItem(null);
    }
  }, [value]);

  const handleClick = (index: number) => {
    setCurrentItem(index);
    if (onChange) {
      onChange(index + 1);
    }
  };

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
          onClick={() => handleClick(index)}
        >
          <IoStarSharp size={40} />
        </div>
      ))}
    </div>
  );
};
