import LeftArrow from "../../../assets/left_arrow.svg";
import styles from "./PrevButton.module.css";

const PrevButton = ({ swiper }) => {
  return (
    <div
      className={`${styles.button} `}
      onClick={() => swiper?.slidePrev()}
    >
      <img src={LeftArrow} />
    </div>
  );
};

export default PrevButton;
