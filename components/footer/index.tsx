import Image from "next/image";
import styles from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/svg/whiteLogo.svg" width={100} height={36} alt="LOGO" />
        </div>
        <div>
          <h3>Создано в 2023 году. Все права защищены</h3>
        </div>
        <div className={styles.rightLogo}>
          <h3>
            Разработано при помощи:{" "}
            <span>
              <Image
                src="/svg/whiteLogoSm.svg"
                width={100}
                height={22}
                alt="Logo"
              />
            </span>
          </h3>
        </div>
      </div>
    </footer>
  );
};
