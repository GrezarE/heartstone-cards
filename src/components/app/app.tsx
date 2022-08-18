import React from "react";
import { Header } from "../header/header";
import style from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { Main } from "../main/main";

export const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};
