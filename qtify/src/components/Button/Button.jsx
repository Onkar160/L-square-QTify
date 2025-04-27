import React from "react";
import styles from "./Button.module.css";

export default function MyButton({children}) {
  return <button className={styles.button}>{children}</button>;
}
