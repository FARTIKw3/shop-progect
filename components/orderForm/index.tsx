import clsx from "clsx";
import styles from "./style.module.css";
interface FormProps {
  formOpen: boolean;
  closeForm: any;
}

export const OrderForm = ({ formOpen, closeForm }: FormProps) => {
  return (
    <>
      <div className={clsx(styles.modal, formOpen && styles.active)}>
        <div
          className={clsx(styles.content, formOpen && styles.active)}
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    </>
  );
};
