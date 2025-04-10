import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.css";

export const LaptopImage = () => {
  return (
    <>
      <div className={styles.LaptopImage}></div>
      <div className={styles.container}>
        <h1>Популярные товары</h1>
        <Swiper
          effect="coverflow"
          slidesPerView={3}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            628: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className={styles.customSwiper}
        >
          <SwiperSlide className={styles.customSlider}></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
