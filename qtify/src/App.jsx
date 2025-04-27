// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { cssVariables } from "./theme";
import Button from "./components/Button/Button"
import { Outlet } from "react-router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app_container" style={cssVariables}>
        {/* <Button>Give feecback</Button> */}
        <Navbar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
