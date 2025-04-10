import styles from "./style.module.css";
interface Props {
  label: string;
}
export function Control({ label }: Props) {
  return (
    <div>
      <button className={styles.btn}>{label}</button>
    </div>
  );
}
