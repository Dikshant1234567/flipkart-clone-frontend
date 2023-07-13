import {
  Box,
  List,
  ListItem,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled(Box)`
  width: 59vw;
  background: white;
  margin-top: 50px;
  padding: 10px;
`;

const ProductTitle = styled(Typography)`
  font-weight: 600;
  font-size: 30px;
  margin: 10px 10px 10px 0px;
`;

const Rating = styled(Typography)`
  font-size: 14px;
  color: #878787;
  margin: 5px 0;
  margin-right: 15px;
`;

const OfferIcon = styled(LocalOfferIcon)`
  width: 20px;
  color: #388e3c;
  margin-right: 10px;
`;

const ListItemFont = styled(ListItem)`
  font-size: 14;
`;

const TableCellStyle = styled(TableCell)`
  font-weight: 600;
  width: 110px;
  padding-right: 10px;
  color: #878787;
  float: left;
  line-height: 2;
  font-size: 16;
  border-bottom: 0;
`;
const TableCellInfo = styled(TableCell)`
  border-bottom: 0;
  font-size: 13px;
`;

const SupperCoinImage = styled("img")({
  width: 250,
  objectFit: "cover",
  margin: "10px",
});

function ProductDetails() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  const { product } = useSelector((state) => state.getProductDetail);
  return (
    <Wrapper>
      <ProductTitle variant="h6">{product.title.longTitle}</ProductTitle>
      <Typography style={{ color: "#1d0f0f", fontSize: 17, fontWeight: 600 }}>
        {product.tagline}
      </Typography>
      <Box style={{ display: "flex" }}>
        <Rating>6 Ratings & 3 Reviews</Rating>
        <img
          width="80px"
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
          alt="assured"
        />
      </Box>
      <Box style={{ display: "flex", alignItems: "baseline" }}>
        <Typography style={{ fontSize: 22, fontWeight: 600 }}>
          ₹{product.price.cost}
        </Typography>
        <Typography style={{ margin: "0 10px", fontSize: 16 }}>
          {product.price.discount}
        </Typography>
        <Typography
          style={{
            fontSize: 14,
            color: "#878787",
            textDecoration: "line-through",
          }}
        >
          ₹{product.price.mrp}
        </Typography>
      </Box>
      <Typography
        style={{
          margin: "10px 0 0 10px",
          color: "green",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        Available offers
      </Typography>
      <List>
        <ListItemFont>
          <OfferIcon />
          Special PriceExtra ₹1749 off(price inclusive of discount) T&C
        </ListItemFont>
        <ListItemFont>
          <OfferIcon />
          Bank Offer5% Cashback on Flipkart Axis Bank Card T&C
        </ListItemFont>
        <ListItemFont>
          <OfferIcon />
          Buy this product and Get Extra ₹50 Off on Select Fans T&C
        </ListItemFont>
        <ListItemFont>
          <OfferIcon />
          Partner OfferPurchase now & get 1 surprise cashback coupon in Future
          Know More
        </ListItemFont>
      </List>

      <Table style={{ overflow: "scroll" }} id='table'>
        <TableBody>
          <TableRow id="table-row">
            <TableCellStyle>Warranty</TableCellStyle>
            <TableCellInfo>
              2 Year Warranty (1 year standard warranty + 1 year additional
              warranty from the date of purchase made by the customer.)
            </TableCellInfo>
          </TableRow>

          <TableRow id="table-row">
            <TableCellStyle>Delivery</TableCellStyle>
            <TableCellInfo>{new Date().getDate().toString()}</TableCellInfo>
          </TableRow>

          <TableRow id="table-row">
            <SupperCoinImage
              src="	https://rukminim1.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50"
              alt=""
            />
          </TableRow>
          
          <TableRow id="table-row">
            <TableCellStyle>Description</TableCellStyle>
            <TableCellInfo>{product.description}</TableCellInfo>
          </TableRow>

        </TableBody>
      </Table>
    </Wrapper>
  );
}

export default ProductDetails;
