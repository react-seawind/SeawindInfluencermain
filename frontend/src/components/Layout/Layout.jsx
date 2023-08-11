import React from "react";
import Header from "../Header/Header";
import Router from "../../router/Router";
import Footer from "../Footer/Footer";
import { HelmetProvider } from "react-helmet-async";

export default function Layout() {
  return (
    <>
      <HelmetProvider>
        <Header />
        <Router />
        <Footer />
      </HelmetProvider>
    </>
  );
}
