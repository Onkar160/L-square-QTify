import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import CircularProgress from "@mui/material/CircularProgress";

export default function Section({ topAlbums, type }) {
  const [isCollapsed, setCollapse] = useState(true);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>Top Album</h3>
          {isCollapsed ? (
            <h4
              className={styles.collapse_button}
              onClick={() => setCollapse(!isCollapsed)}
            >
              Show all
            </h4>
          ) : (
            <h4
              className={styles.collapse_button}
              onClick={() => setCollapse(!isCollapsed)}
            >
              Collapse
            </h4>
          )}
        </div>
        {topAlbums.data ? (
          <div className={styles.cards}>
            {topAlbums.data.map((album) => (
              <Card album={album} key={album.id} />
            ))}
          </div>
        ) : (
          <div className={styles.progress_bar}>
            <CircularProgress color="primary" />
          </div>
        )}
      </div>
    </>
  );
}
