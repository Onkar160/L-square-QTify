import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../Card/Card";
import NextButton from "./NextButton/NextButton";
import PrevButton from "./PrevButton/PrevButton";
import styles from "./Carousel.module.css";
import { useState } from "react";

export default function Carousel({ items, type }) {
  const [swiperObj, setSwiper] = useState(null);
  const [isEnd, setEnd] = useState();
  const [isBeginning, setBeginning] = useState();
  // console.log(items);

  return (
    <div className={styles.swiper_wrapper}>
      <Swiper
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setEnd(swiper.isEnd);
          setBeginning(swiper.isBeginning);
        }}
        onReachEnd={() => setEnd(true)}
        onReachBeginning={() => setBeginning(true)}
        onFromEdge={() => {
          setEnd(false);
          setBeginning(false);
        }}
        spaceBetween={40}
        modules={[Navigation]}
        allowTouchMove
        slidesPerView={"auto"}
      >
        {items?.data
          ? items.data.map((item) => (
              <SwiperSlide key={item.id}>
                <Card item={item} type={type} />
              </SwiperSlide>
            ))
          : Array.isArray(items)
          ? items.map((item) => (
              <SwiperSlide key={item.id}>
                <Card item={item} type={type} />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
      <div className={styles.button_wrapper}>
        {!isBeginning && (
          <PrevButton className={styles.prev} swiper={swiperObj} />
        )}
        {!isEnd && <NextButton className={styles.next} swiper={swiperObj} />}
      </div>
    </div>
  );
}
