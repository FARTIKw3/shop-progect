import styles from "./style.module.css";

export const CatalogTitle = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Каталог</h1>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};
