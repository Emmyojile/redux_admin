import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Outlet />
        <div>Footer</div>
      </Provider>
    </>
  );
};

export default RootLayout;
