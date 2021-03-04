import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { pagesData } from "./pages/PagesData";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Reports from "./pages/Reports";
import Contact from "./pages/Contact";
import Wrona from "./pages/Wrona";
import { useState } from "react";
import "./pages/Page.css";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function App() {
  const [isNavShown, setShowNav] = useState(true);
  const toggleBar = () => setShowNav(!isNavShown);
  return (
    <div className="app">
      <Wrona />
      {/* <button onClick={toggleBar}>sss</button> */}
      <Router>
        <Navbar show={isNavShown} barData={pagesData} toggle={toggleBar} />
        <div className={isNavShown ? "content-cropped" : "content"}>
          <Header toggleBar={toggleBar} isNavShown={isNavShown} />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="push"
                >
                  <div className={isNavShown ? "page-cropped" : "page"}>
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/shop" component={Shop} />
                      <Route path="/reports" component={Reports} />
                      <Route path="/contact" component={Contact} />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
