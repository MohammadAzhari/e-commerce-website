import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { State } from "../api/context";
import { mobile } from "../utils/responsive";

// styles
const Container = styled.div`
  height: 50px;
  margin-bottom: 20px;
  ${mobile({ height: "80px" })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline-width: 0;
  }
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

// component
const Nav = () => {
  // context
  const { cart, setPage } = State();

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-Commerce</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => setPage(2)}>SIGN IN</MenuItem>
          <MenuItem onClick={() => setPage(1)}>
            {cart.length ? (
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            ) : (
              <ShoppingCartOutlined />
            )}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Nav;
