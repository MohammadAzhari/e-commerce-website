import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { State } from "../api/context";
import { mobile } from "../utils/responsive";

// styles
const Container = styled.div`
  display: ${(props) => props.display === "none" && "none"};
  position: fixed;
  z-index: 30;
  background-color: white;
  width: 70%;
  left: 50%;
  overflow-y: scroll;
  max-height: 100%;
  transform: translateX(-50%);
`;

const Wrapper = styled.div`
  padding: 50px;
  position: relative;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const Back = styled.button`
  margin-top: 40px;
  margin-left: 20px;
  padding: 10px;
  cursor: pointer;
  background-color: teal;
  color: white;
  font-size: 17px;
  font-weight: 500;
  border: none;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

// component
const SelectedProduct = ({ display, item }) => {
  // context
  const { setSelectedItem, addToCart } = State();

  // states
  const [count, setCount] = useState(1);

  // this function closes the selected item
  const back = () => {
    setSelectedItem({
      item: {},
      show: false,
    });
    setCount(1);
  };

  return (
    <Container display={display}>
      <Back onClick={back}>back</Back>
      <Wrapper>
        <ImgContainer>
          <Image src={item.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.description}</Desc>
          <Price>$ {item.price}</Price>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => setCount(count > 0 ? count - 1 : count)} />
              <Amount>{count}</Amount>
              <Add onClick={() => setCount(count + 1)} />
            </AmountContainer>
            <Button
              onClick={() => {
                addToCart(item, count);
                back();
              }}
            >
              ADD TO CART
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SelectedProduct;
