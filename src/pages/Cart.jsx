import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Up from "../components/Up";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { mobile } from "../utils/responsive";
import { State } from "../api/context";

// styles
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const DeleteBtnContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DeleteBtn = styled.button`
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  padding: 15px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 30vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;
`;

const NoItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-size: 24px;
  color: teal;
`;

// page
const Cart = () => {
  // context
  const { cart, setCart, deleteFromCart, setPage } = State();

  // this function increases or decreases the quantity of the item
  const changeQuantity = (item, quantity, n) => {
    const newCart = cart.map((element) => {
      if (element === item && !(n === -1 && quantity <= 1)) {
        return { ...element, quantity: quantity + n };
      } else return element;
    });
    setCart(newCart);
  };

  // this funtion returns the total price
  const totalPrice = () => {
    let sum = 0;
    for (let element of cart) {
      sum += element.quantity * element.item.price;
    }
    return sum.toFixed(2);
  };

  // chick out action
  const chickOut = () => {
    alert("done , thank you");
    setCart([]);
  };
  return (
    <Container>
      <Nav />
      <Up />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => setPage(0)}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({cart.length})</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={chickOut}>
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.length > 0 ? (
              cart.map((element) => (
                <div key={element.item.id}>
                  <Product>
                    <ProductDetail>
                      <Image src={element.item.image} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {element.item.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {element.item.id}
                        </ProductId>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add
                          onClick={() =>
                            changeQuantity(element, element.quantity, 1)
                          }
                        />
                        <ProductAmount>{element.quantity}</ProductAmount>
                        <Remove
                          onClick={() =>
                            changeQuantity(element, element.quantity, -1)
                          }
                        />
                      </ProductAmountContainer>
                      <ProductPrice>$ {element.item.price}</ProductPrice>
                    </PriceDetail>
                    <DeleteBtnContainer>
                      <DeleteBtn onClick={() => deleteFromCart(element)}>
                        delete
                      </DeleteBtn>
                    </DeleteBtnContainer>
                  </Product>
                  <Hr />
                </div>
              ))
            ) : (
              <NoItems>there is no items to show !</NoItems>
            )}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice()}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={chickOut}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
