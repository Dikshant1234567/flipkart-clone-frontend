import styled from "@emotion/styled";
import { Box, Button, Typography, ButtonGroup } from "@mui/material";
import React from "react";
import { removeFromCart } from "../../redux/action/cartAction";
import { useDispatch } from "react-redux";

const elipse = (text) => {
  return text.substring(0, 45) + "...";
};

const Wrapper = styled(Box)`
  display: flex;
  margin-top: 1rem;
  background: white !important;
  border-bottom: 1px solid #00000014;
`;

const QuantityBtn = styled(Button)`
  border-radius: 50%;
  color: black;
  border: 1px solid black;
`;

function CartProduct({ item }) {
  const dispatch = useDispatch();

  const Removehandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Wrapper id="cart-item">
      <Box width="30%" style={{ textAlign: "center" }}>
        <img
          style={{ width: "180px", height: "200px", background: "white" }}
          src={item.url}
          alt="product"
        />
        <ButtonGroup id="button-group" style={{ marginBottom: 10, marginTop: 10 }}>
          <QuantityBtn>-</QuantityBtn>
          <QuantityBtn
            disabled={true}
            style={{ fontWeight: 600, color: "black" }}
          >
            1
          </QuantityBtn>
          <QuantityBtn>+</QuantityBtn>
        </ButtonGroup>
      </Box>
      <Box id="cartItem-detail"
        style={{
          marginLeft: "1rem",
          paddingTop: "1rem",
          color: "#212121",
          lineHeight: 1,
        }}
      >
        <Typography style={{ fontSize: 16 }}>
          {elipse(item.title.longTitle)}
        </Typography>

        <Typography style={{ marginTop: 10, color: "#878787" }}>
          {item.tagline}
        </Typography>

        <Box
          style={{ display: "flex", alignItems: "baseline", margin: "10px 0" }}
        >
          <Typography
            style={{
              fontSize: 14,
              color: "#878787",
              textDecoration: "line-through",
            }}
          >
            ₹{item.price.mrp}
          </Typography>

          <Typography
            style={{ margin: "0 10px", fontSize: 18, fontWeight: 600 }}
          >
            ₹{item.price.cost}
          </Typography>
          <Typography style={{ fontSize: 16, color: "#388e3c" }}>
            {item.price.discount}
          </Typography>
        </Box>
        <Button style={{ marginTop: 30 }} onClick={() => Removehandler(item.id)}>
          Remove
        </Button>
      </Box>
    </Wrapper>
  );
}

export default CartProduct;
