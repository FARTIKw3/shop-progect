import { useSwiper } from "swiper/react";
import styles from "./style.module.css";
import { TfiArrowCircleRight } from "react-icons/tfi";

export const RightBtn = () => {
  const swiper = useSwiper();
  return (
    <div onClick={() => swiper.slideNext()}>
      <TfiArrowCircleRight size={52} />
    </div>
  );
};
