import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import PageNotFound from "./pages/PageNotFound";
import CountryDetails from "./pages/CountryDetails";
import InputCountryName from "./pages/InputCountryName";

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<InputCountryName></InputCountryName>}
          ></Route>
          <Route path="/:name" element={<CountryDetails></CountryDetails>} />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
