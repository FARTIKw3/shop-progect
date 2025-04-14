import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Custom404() {
  return (
    <>
      <div className={styles.container}>
        <Image
          className={styles.custom}
          src="/svg/custom404.svg"
          width={448}
          height={148}
          alt="custom404"
        />
      </div>
      <div className={styles.link_cont}>
        <Link className={styles.link} href="/">
          вернуться на главную
        </Link>
      </div>{" "}
    </>
  );
}
