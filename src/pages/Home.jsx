import React from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Up from "../components/Up";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import SelectedProduct from "../components/SelectedProduct";
import { State } from "../api/context";

// page
export default function Home() {
  // context
  const { selectedItem } = State();

  return (
    <>
      <SelectedProduct
        display={!selectedItem.show ? "none" : ""}
        item={selectedItem.item}
      />
      <Nav />
      <Up />
      <Slider />
      <Filter />
      <Products />
      <Footer />
    </>
  );
}
