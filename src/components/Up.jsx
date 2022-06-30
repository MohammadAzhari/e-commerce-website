import React from "react";
import styled from "styled-components";

// styles
const Container = styled.div`
  width: 100%;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
`;

export default function Up() {
  return <Container>50% discounts !!</Container>;
}
