import styled from "styled-components";
import { State } from "../api/context";
import data from "../api/data.json";
import Product from "./Product";

// get products from JSON file
const { products } = data;

// styles
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// component
const Products = () => {
  // context
  const { category } = State();

  // this function returns array of items by category
  const productsList = () => {
    if (category === "all") return products;
    let list = [];
    for (let item of products) {
      if (item.category === category) list.push(item);
    }
    return list;
  };

  return (
    <Container>
      {productsList().map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
