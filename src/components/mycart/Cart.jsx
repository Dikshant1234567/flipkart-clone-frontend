import { Box, Button, Grid, Hidden, Typography, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import TotalPriceCart from "./TotalPriceCart";
import CartFooter from "./CartFooter";
import EmptyCart from "./EmptyCart";

const Wrapper = styled(Grid)`
  display: flex;
  background: #efefef;
`;
const RightWrapperInfo = styled(Grid)`
  width: 41vw;
  margin-left: 12vw;
  background: #e4e7ed;
  border: 1px solid #00000014;
`;
const CartHeading = styled(Box)`
  background: white;
  margin: 10px 0;
  width: 100%;
  border-bottom: 3px solid #2a55e5;
  & > p {
    width: 3%;
    font-size: 26px;
    padding-left: 8rem;
    padding-bottom: 12px;
    letter-spacing: -1px;
    font-weight: 600;
    color: #2a55e5;
  }
`;
const AddressWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 10px 0;
  background: white;
  align-items: center;
  & > button {
    border: 1px solid black;
    padding: 10px 15px;
  }
`;

const ProductWrapper = styled(Box)`
  padding: 10px;
  background: white !important;
  border-bottom: 1px solid #00000014;
  display: block;
`;

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <section style={{ marginTop: 55 }}>
      {cartItems.length > 0 ? (
        <>
          <Wrapper container style={{ height: "fit-content" }} id="cart-container">
            <RightWrapperInfo id="cart-product-details">
              <CartHeading>
                <Typography id="cart-text">Cart({cartItems.length})</Typography>
              </CartHeading>
              <AddressWrapper id="cart-header">
                <Typography>From Saved Addresses</Typography>
                <Button id="pin-btn" style={{ border: "1px solid #00000014" }}>
                  Enter Delivery Pincode
                </Button>
              </AddressWrapper>
              <ProductWrapper>
                {cartItems.map((item, id) => {
                  return <CartProduct item={item} key={id} />;
                })}
              </ProductWrapper>
            </RightWrapperInfo>
            <Grid item>
              <TotalPriceCart item={cartItems} />
            </Grid>
          </Wrapper>
          {cartItems.length <= 1 && <CartFooter />}
        </>
      ) : (
        <div>
          <EmptyCart />
        </div>
      )}
    </section>
  );
}

export default Cart;
