"use client";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperData } from "./swiperData";
import Image from "next/image";
import "swiper/css";
import { LeftBtn } from "@/shared/sliderControls/leftBtn";
import { RightBtn } from "@/shared/sliderControls/rightBtn";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { TbBookmark } from "react-icons/tb";
export const Slider = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Популярные товары</h1>
        </div>
        <Swiper
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            628: { slidesPerView: 2, spaceBetween: 20 },
            1030: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className={styles.customSwiper}
        >
          {swiperData.map((item, index) => (
            <SwiperSlide className={styles.customSlider}>
              <div key={index} className={styles.cart}>
                <div>
                  <Image src={item.url} width={260} height={173} alt="cart" />
                </div>
                <div>
                  <h2 className={styles.title}>{item.title}</h2>
                </div>
                <p className={styles.paragh}>{item.description}</p>
                <div className={styles.cont}>
                  <div className={styles.btn}>
                    <button className={styles.btnw}>
                      <div className={styles.icon}>
                        <AiOutlineInfoCircle size={22} />
                      </div>
                      <div>Полная информация</div>
                    </button>
                  </div>
                  <div className={styles.btn}>
                    <button className={styles.btnw}>
                      <div className={styles.icon}>
                        <CiCirclePlus size={22} />
                      </div>
                      <div>Добавить в корзину</div>
                    </button>
                  </div>
                  <div className={styles.btn}>
                    <button className={styles.btnw}>
                      <div className={styles.icon}>
                        <TbBookmark size={22} />
                      </div>
                      <div>Добавить в избранное</div>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.controls}>
            <LeftBtn />
            <RightBtn />
          </div>
        </Swiper>
      </div>
    </>
  );
};
