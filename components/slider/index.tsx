"use client";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import { LeftBtn } from "@/shared/sliderControls/leftBtn";
import { RightBtn } from "@/shared/sliderControls/rightBtn";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { TbBookmark } from "react-icons/tb";
import { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/strapiData";
import { Modal } from "../modal";
import { useBasket } from "@/store/basket";
import { useFavorite } from "@/store/favorite";

export const Slider = ({ dataSlide }: { dataSlide: IProduct[] }) => {
  const [slideData, setSlideData] = useState<IProduct[]>(dataSlide);
  const [isOpen, setIsOpen] = useState(false);
  const { addBasketItem } = useBasket();
  const { addFavorite } = useFavorite();

  const closeModal = () => setIsOpen(!isOpen);

  if (!slideData || slideData.length === 0)
    return (
      <div>
        <h1>Loding</h1>
      </div>
    );
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
            628: { slidesPerView: 2, spaceBetween: 10 },
            1030: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className={styles.customSwiper}
        >
          {slideData.map((item, index) => (
            <SwiperSlide key={item.id || index} className={styles.customSlider}>
              <div className={styles.cart}>
                <div>
                  <Image
                    src={`http://localhost:1337${item.image[0]?.url}`}
                    width={260}
                    height={173}
                    alt="cart"
                  />
                </div>
                <div>
                  <h2 className={styles.title}>{item.name}</h2>
                </div>
                <p className={styles.paragh}>{item.description}</p>
                <div className={styles.cont}>
                  <div className={styles.btn}>
                    <button
                      className={styles.btnw}
                      onClick={() => setIsOpen(true)}
                    >
                      <div className={styles.icon}>
                        <AiOutlineInfoCircle size={22} />
                      </div>
                      <div>Полная информация</div>
                    </button>
                  </div>
                  <div className={styles.btn}>
                    <button
                      className={styles.btnw}
                      onClick={() => addBasketItem(item)}
                    >
                      <div className={styles.icon}>
                        <CiCirclePlus size={22} />
                      </div>
                      <div>Добавить в корзину</div>
                    </button>
                  </div>
                  <div className={styles.btn}>
                    <button
                      className={styles.btnw}
                      onClick={() => addFavorite(item)}
                    >
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
        <Modal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
};
