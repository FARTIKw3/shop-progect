"use client";
import Link from "next/link";
import { navData } from "./navData";
import styles from "./style.module.css";
import clsx from "clsx";
import { useEffect } from "react";

interface Props {
  isActive: boolean;
  close: () => void;
}
export const Navigation = ({ isActive, close }: Props) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "auto";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isActive]);

  return (
    <div className={clsx(styles.container, isActive && styles.isActive)}>
      {navData.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={styles.link}
          onClick={() => {
            if (window.innerWidth < 890) close();
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
