import styles from "./style.module.css";

export const SubScribeForm = () => {
  return (
    <div>
      <div>
        <h1 className={styles.title}>
          Подпишитесь на нашу рассылку, чтобы не упустить информацию!
        </h1>
      </div>
      <form action="" className={styles.form}>
        <input
          type="email"
          placeholder="Введите ваш e-mail"
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Подписаться
        </button>
        <div>
          <span></span>
        </div>
      </form>
    </div>
  );
};
