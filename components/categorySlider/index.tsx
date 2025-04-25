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
import { IProduct } from "@/interfaces/strapiData";
import { Modal } from "../modal";
import { useBasket } from "@/store/basket";
import { useFavorite } from "@/store/favorite";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa";

export const CategorySlider = ({ dataSlide }: { dataSlide: IProduct[] }) => {
  const [slideData] = useState<IProduct[]>(dataSlide);
  const [isOpen, setIsOpen] = useState(false);
  const { addBasketItem } = useBasket();
  const { favorite, addFavorite } = useFavorite();
  const API_URL =
    process.env.NEXT_PUBLIC_STRAPI_API ||
    "http://strapi-progect-shop-production.up.railway.app";

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
        <div className={styles.titleContainer}>
          <div>
            <h1>Ноутбуки </h1>
          </div>
          <div>
            <Link href="/separate">
              {" "}
              <span className={styles.span}>Открыть страницу </span>
            </Link>
          </div>
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
                    src={`${API_URL}${item.image[0]?.url}`}
                    className={styles.image}
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
                  <div className={styles.btnFavor}>
                    <button
                      className={styles.btnw}
                      onClick={() => addFavorite(item)}
                    >
                      <div
                        className={clsx(
                          styles.icon,
                          favorite.some((fave) => fave.id === item.id) &&
                            styles.active
                        )}
                      >
                        <TbBookmark size={22} />
                      </div>
                      <div
                        className={clsx(
                          styles.icon,
                          favorite.some((fave) => fave.id === item.id) &&
                            styles.active
                        )}
                      >
                        Добавить в избранное
                      </div>
                      <div
                        className={clsx(
                          styles.cheackBox,
                          favorite.some((fave) => fave.id === item.id) &&
                            styles.check
                        )}
                      >
                        <FaCheck size={20} />
                      </div>
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
