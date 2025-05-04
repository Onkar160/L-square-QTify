import RightArrow from "../../../assets/right_arrow.svg";
import styles from "./NextButton.module.css";


const NextButton = ({swiper}) => {
    
  return (
    <div className={`${styles.button} `} onClick={() => swiper?.slideNext()}>
      <img src={RightArrow} />
    </div>
  );
};

export default NextButton;
