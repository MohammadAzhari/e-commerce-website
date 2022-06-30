import styled from "styled-components";
import { State } from "../api/context";
import { mobile } from "../utils/responsive";

import data from "../api/data.json";

const { categories } = data;

// styles
const Container = styled.div`
  background-color: teal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 20px;
  color: white;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  color: white;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
  &:focus {
    outline-width: 0;
  }
`;
const Option = styled.option``;

// component
const ProductList = () => {
  // context
  const { category, setCategory } = State();

  return (
    <Container>
      <Title>{category} items</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={(e) => setCategory(e.target.value)}>
            <Option defaultValue={true}>all</Option>
            {categories.map((item, i) => (
              <Option key={i}>{item}</Option>
            ))}
          </Select>
        </Filter>
      </FilterContainer>
    </Container>
  );
};

export default ProductList;
