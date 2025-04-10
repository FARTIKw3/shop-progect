import { useSwiper } from "swiper/react";
import styles from "./style.module.css";
import { TfiArrowCircleLeft } from "react-icons/tfi";

export const LeftBtn = () => {
  const swiper = useSwiper();
  return (
    <div onClick={() => swiper.slidePrev()}>
      <TfiArrowCircleLeft size={52} />
    </div>
  );
};
