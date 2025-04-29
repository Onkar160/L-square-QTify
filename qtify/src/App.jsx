// import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { cssVariables } from "./theme";
import { Outlet } from "react-router";
import { fetchTopAlbum, fetchNewAlbum } from "./components/API/API";

function App() {
  const [data, setData] = useState({});

  const generateItems = (key, fun) => {
    fun().then((data) => {
      setData((prevData) => {
        return {
          ...prevData,
          [key]: data,
        };
      });
    });
  };

  useEffect(() => {
    generateItems("topAlbums", fetchTopAlbum);
    generateItems("newAlbums", fetchNewAlbum);
  }, []);

  const {topAlbums = [], newAlbums = [], songs = [], genres = []} = data;

  return (
    <ThemeProvider theme={theme}>
      <div className="app_container" style={cssVariables}>
        {/* <Button>Give feecback</Button> */}
        <Navbar />
        <Outlet context={{topAlbums, newAlbums, songs, genres}}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
