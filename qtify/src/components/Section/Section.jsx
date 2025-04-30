import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "../Carousel/Carousel";

export default function Section({ data, type, title }) {
  const [isCollapsed, setCollapse] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <h4
            className={styles.collapse_button}
            onClick={() => setCollapse(!isCollapsed)}
          >
            {!isCollapsed ? "Show All" : "Collapse"}
          </h4>
        </div>
        {data.length === 0 ? (
          <div className={styles.progress_bar}>
            <CircularProgress color="primary" />
          </div>
        ) : !isCollapsed ? (
          <div className={styles.cards}>
            <Carousel items={data} type={type} />
          </div>
        ) : (
          <div className={styles.cards}>
            {data.data.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
