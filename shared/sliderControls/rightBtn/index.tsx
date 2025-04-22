import { useSwiper } from "swiper/react";
import { TfiArrowCircleRight } from "react-icons/tfi";

export const RightBtn = () => {
  const swiper = useSwiper();
  return (
    <div onClick={() => swiper.slideNext()} style={{ cursor: "pointer" }}>
      <TfiArrowCircleRight size={52} />
    </div>
  );
};
