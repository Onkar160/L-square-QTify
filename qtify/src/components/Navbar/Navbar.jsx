import React from "react";
import { Link } from "react-router";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ topAlbums, newAlbums }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.search}>
        <Search
          placeholder="Search a song of your choice"
          topAlbums={topAlbums}
          newAlbums={newAlbums}
        />
      </div>
      <div className={styles.button}>
        <Button>Give Feedback</Button>
      </div>
    </nav>
  );
}

export default Navbar;
