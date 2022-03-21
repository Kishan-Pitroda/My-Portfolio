import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import appTheme from "./AppTheme";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Gallery from "./components/Gallery/Gallery";
import Bio from "./components/Bio/Bio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/gallery" component={Gallery}></Route>
            <Route exact path="/bio" component={Bio}></Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
