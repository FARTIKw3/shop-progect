import styles from "./style.module.css";

export const SingUp = () => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Регистрация</h1>
        <span className={styles.span}>Добро пожаловать в наш Shop!</span>
      </div>
      <form action="" className={styles.form}>
        <div>
          <label htmlFor="name" className={styles.label}>
            Enter your name
          </label>
          <input type="text" id="name" className={styles.input} />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>
            Enter your email
          </label>
          <input type="email" id="email" className={styles.input} />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>
            Enter your password
          </label>
          <input type="password" id="password" className={styles.input} />
        </div>
        <button className={styles.formBtn}>Sign up</button>
      </form>
    </div>
  );
};
