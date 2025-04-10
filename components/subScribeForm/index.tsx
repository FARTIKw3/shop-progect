import styles from "./style.module.css";

export const SubScribeForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titileContainer}>
        <h1 className={styles.title}>
          Подпишитесь на нашу рассылку, чтобы не упустить информацию!
        </h1>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Введите ваш e-mail"
            className={styles.input}
          />
          <button type="submit" className={styles.btn}>
            Подписаться
          </button>
        </div>
        <div className={styles.icon}></div>
      </form>
    </div>
  );
};
