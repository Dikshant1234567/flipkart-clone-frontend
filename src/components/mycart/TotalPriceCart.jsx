import styled from "@emotion/styled";
import { Box, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)`
  width: 30vw;
  background: white;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const SectionWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  magrin-top: 1rem;
  height: 3rem;
  padding: 20px;
`;
const PriceKey = styled(Typography)`
  color: rgb(135, 135, 135);
  padding: 10px;
  font-size: 16px;
`;

const Discount = styled(Typography)`
  color: green;
`;

function TotalPriceCart({ item }) {
  const { cartItems } = useSelector((state) => state.cart);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  console.log(cartItems);
  console.log(cartItems[0].price);
  const Rate = cartItems[0].price;

  const totalAmount = () => {
    let price = 0;
    let discount = 0;
    cartItems.map((item) => {
      price += item?.price.mrp;
      discount += item?.price.mrp - item?.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [item]);

  return (
    <Wrapper id="cart-price">
      <Box>
        <PriceKey variant="h6">PRICE DETAILS</PriceKey>
      </Box>
      <Divider />
      <Box>
        <SectionWrapper>
          <Typography>
            Price <b>({item.length})</b>
          </Typography>
          <Typography>₹{price}</Typography>
        </SectionWrapper>
        <SectionWrapper>
          <Typography>Discount</Typography>
          <Discount>-₹{discount}</Discount>
        </SectionWrapper>
        <SectionWrapper>
          <Typography>Delivery Charges</Typography>
          <Discount>Free</Discount>
        </SectionWrapper>
        <br />
        <Divider />
        <SectionWrapper
          style={{
            height: "4rem",
          }}
        >
          <Typography style={{ fontWeight: 600 }}>Total Amount</Typography>
          <Typography style={{ fontWeight: 600 }}>
            ₹{price - discount}
          </Typography>
        </SectionWrapper>
      </Box>
    </Wrapper>
  );
}

export default TotalPriceCart;
