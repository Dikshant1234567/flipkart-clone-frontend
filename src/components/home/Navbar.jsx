import { Box, Typography, styled } from "@mui/material";
import { navData } from "../constant/data";

const NavWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 40px;
  min-width: 700px !important;
  overflow-x: scroll;
`;

const NavComponent = styled(Box)`
  text-align: center;
  & > p{
    font-weight: 500;
    font-size: 14px;
    font-family: Roboto,Arial,sans-serif;
    color:#172337;
}
  }
`;

function Navbar() {
  return (
    <NavWrapper id="navbar-item">
      {navData.map((data, index) => {
        return (
          <NavComponent id="nav-items" key={index}>
            <img src={data.url} alt="img" style={{ width: 64 }} />
            <Typography>{data.text}</Typography>
          </NavComponent>
        );
      })}
    </NavWrapper>
  );
}

export default Navbar;
