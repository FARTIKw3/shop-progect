import styles from "./styles.module.css";
import Image from "next/image";

export const FounderSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Основатель компании</h3>
          <p className={styles.text}>
            Султан Сулейман - это текст-рыба, часто используемый в печати и
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
            src="/founder.png"
            width={500}
            height={500}
            alt="founder"
          />
        </div>
      </div>
    </>
  );
};
