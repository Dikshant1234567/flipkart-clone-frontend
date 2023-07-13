import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const imgurl =
  "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

const Component = styled(Box)`
  height: 92vh;
  text-align: center;
  background: #e7e7e7e7;
`;
const Wrapper = styled(Box)`
  width: 80vw;
  margin: auto;
  padding-top: 4rem;
`;
const Header = styled(Typography)`
  background: white;
  padding: 10px;
  margin: 10px 0;
  color: #1976d2;
`;

const Empty = styled(Box)`
  background: white;
  padding: 10px;
`;

const Text = styled(Typography)`
  margin-top: 1rem;
  font-size: 16px;
  color: #000000b5;
`;
function EmptyCart() {
  return (
    <Component id="empty-cart">
      <Wrapper>
        <Header variant="h4">Flipkart Clone</Header>
        <Empty>
          <img width="300px" src={imgurl} alt="img" />
          <Text>Your Cart is Empty</Text>
        </Empty>
      </Wrapper>
    </Component>
  );
}

export default EmptyCart;
