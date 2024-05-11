import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Loaderimg = () => (
  <div id="global-loader">
    <img
      src={"/logo512.png"}
      className="loader-img"
      alt="Loader"
    />
  </div>
);

root.render(
  <>
 
      <BrowserRouter>
        <React.Suspense fallback={<Loaderimg />}>
          <Routes>
            <Route element={<App />}>
              <Route
                path={`${process.env.PUBLIC_URL}/`}
                element={<Home />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/about`}
                element={<About />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/services`}
                element={<Services />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/project`}
                element={<Projects />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/contact`}
                element={<Contact />}
              />
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>

  </>
);
