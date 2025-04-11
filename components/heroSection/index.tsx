import styles from "./styles.module.css";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Быстро, надёжно, качественно - Akloom Shop
          </h1>
          <p className={styles.text}>
            Lorem Ipsum - это текст-рыба, часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <Image
            className={styles.image}
            src="/unsplashc.png"
            width={642}
            height={647}
            alt="unsplashc"
          />
        </div>
      </div>
    </>
  );
};
