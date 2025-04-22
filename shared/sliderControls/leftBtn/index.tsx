import { useSwiper } from "swiper/react";
import { TfiArrowCircleLeft } from "react-icons/tfi";

export const LeftBtn = () => {
  const swiper = useSwiper();
  return (
    <div onClick={() => swiper.slidePrev()} style={{ cursor: "pointer" }}>
      <TfiArrowCircleLeft size={52} />
    </div>
  );
};
