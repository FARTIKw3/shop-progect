import Link from "next/link";
import { navData } from "./navData";
import styles from "./style.module.css";
import clsx from "clsx";

interface Props {
  isActive: boolean;
}
export const Navigation = ({ isActive }: Props) => {
  return (
    <div className={clsx(styles.container, isActive && styles.isActive)}>
      {navData.map((item) => (
        <Link key={item.label} href={item.href} className={styles.link}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};
