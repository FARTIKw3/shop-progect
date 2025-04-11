import Link from "next/link";
import { navData } from "./navData";
import styles from "./style.module.css";
import clsx from "clsx";

interface Props {
  isActive: boolean;
  close: () => void;
}
export const Navigation = ({ isActive, close }: Props) => {
  return (
    <div className={clsx(styles.container, isActive && styles.isActive)}>
      {navData.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={styles.link}
          onClick={close}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
