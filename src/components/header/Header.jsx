import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// components
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import SmallScreenCustomMenu from "./SmallScreenCustomMenu";

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "white",
  // marginLeft: "2rem",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const CustomMenuButton = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const AppbarWrapper = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const LogoImage = styled(Box)`
  margin-left: 12%;
  line-height:0px;
  
  }
`;

const HeaderText = styled(Typography)`
  font-family: inherit;
  font-size: 12px;
  font-weight: 300;
  font-style: italic;
  color: white;
`;

const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

const list = () => {
  return (
    <Box>
      <List>
        <ListItem >
          <SmallScreenCustomMenu style={CustomMenuButton} />
        </ListItem>
      </List>
    </Box>
  );
};
function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppbarWrapper id="header">
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton>
          <MenuIcon color="white" onClick={handleOpen} />
        </MenuButton>

          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>


        <LogoImage id="filpkart-logo">
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box style={{ display: "flex", color: "inherit" }}>
              <HeaderText>Explore</HeaderText>
              <HeaderText style={{ color: "#ffe11b" }}>Plus</HeaderText>
              <img src={subURL} alt="img" style={{ width: 8, marginLeft: 4 }} />
            </Box>
          </Link>
        </LogoImage>

        <Search />

        <CustomButton />
      </Toolbar>
    </AppbarWrapper>
  );
}

export default Header;
