import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/cartAction";

const ProductImage = styled("img")({
  width: 300,
  height: 350,
  border: "1px solid #00000024",
  padding: "5px 10px",
  background: "#ffffff",
});

const ActionButton = styled(Button)`
  width: 45%;
  font-weight: 600;
  height: 40px;
`;
function ActiionDetails({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const openCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };
  return (
    <Box id='product-img'
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: 300,
        marginTop: 50,
      }}
    >
      <ProductImage src={product.detailUrl} alt="product" />
      <Box width="300px" style={{ padding: "20px 0px", background: "white" }}>
        <ActionButton
          style={{ marginRight: "15px", background: "#ff9f00" }}
          variant="contained"
          onClick={() => openCart()}
        >
          Add to cart
        </ActionButton>
        <ActionButton style={{ background: "#fb641b" }} variant="contained">
          Buy Now
        </ActionButton>
      </Box>
    </Box>
  );
}

export default ActiionDetails;
