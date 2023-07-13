
import { useContext, useState } from "react";
import { DataContext } from "../../context/dataprovider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginDialog from "../Login/loginDialog";
import { Badge, Box, Button, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: "2rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LoginButton = styled(Button)`
  background: white;
  padding: 0px 40px;
  color: blue;
  text-transform: none;
  height: 30px;
  margin-top: 0px;
`;
const CartLogo = styled(ShoppingCartIcon)`
  color: smokewhite;
  width: 20px;
  cursor: pointer;
`;
const SubText = styled(Typography)`
  margin-top: 5px;
  width: 117px;
`;

function CustomButton() {
  const [openDialog, setOpenDialog] = useState(false);
  const { account } = useContext(DataContext);

  const { cartItems } = useSelector((state) => state.cart);
  const OpenDialogHandler = () => {
    setOpenDialog(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile />
      ) : (
        <LoginButton variant="contained" onClick={OpenDialogHandler}>
          Login
        </LoginButton>
      )}
      <SubText style={{ marginLeft: "2rem" }}>Become a seller</SubText>
      <SubText style={{ marginLeft: "2rem", marginRight: 0 }}>More</SubText>

      <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
        <Box style={{ display: "flex", marginLeft: "-2rem", marginTop: 5 }}>
          <Badge badgeContent={cartItems && cartItems.length} color="success">
            <CartLogo />
          </Badge>
          <Typography style={{ marginLeft: "10px" }}>Cart</Typography>
        </Box>
      </Link>
      <LoginDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Wrapper>
  );
}

export default CustomButton;
