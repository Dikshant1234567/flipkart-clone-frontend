import { Box, Button, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/loginDialog";
import { useContext, useState } from "react";
import { DataContext } from "../../context/dataprovider";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "block",
  margin: "2rem",
  textAlign: "center",
}));

const LoginButton = styled(Button)`
  background: white;
  padding: 0px 40px;
  color: blue;
  text-transform: none;
  height: 30px;
  margin-top: 0px;
  margin-bottom: 20px;
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

function SmallScreenCustomMenu() {
  const [openDialog, setOpenDialog] = useState(false);
  const { account } = useContext(DataContext);

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
      <Link to={"/"}>
      <SubText style={{ marginLeft: 0, marginBottom: "2rem", color:"black" }}>
        Home
      </SubText>
      </Link>
      <SubText style={{ marginLeft: 0, marginBottom: "2rem" }}>
        Become a seller
      </SubText>
      <SubText style={{ marginLeft: 0, marginRight: 0, marginBottom: "2rem" }}>
        More
      </SubText>
      <Link to={"/cart"}>
        <Box
          onClick={() => setOpenDialog(false)}
          style={{
            display: "flex",
            marginLeft: 20,
            marginTop: 0,
            cursor: "pointer",
            color: "black",
          }}
        >
          <CartLogo />
          <Typography>Cart</Typography>
        </Box>
      </Link>
      <LoginDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Wrapper>
  );
}

export default SmallScreenCustomMenu;
