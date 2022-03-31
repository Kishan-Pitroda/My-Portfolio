import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import appTheme from "./AppTheme";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Gallery from "./components/Gallery/Gallery";
import Biodata from "./components/Biodata/Biodata";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/resume" component={Resume}></Route>
            <Route exact path="/gallery" component={Gallery}></Route>
            <Route exact path="/biodata" component={Biodata}></Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
