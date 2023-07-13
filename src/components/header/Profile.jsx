import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../../context/dataprovider";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


function Profile() {
  const { account , setAccount } = useContext(DataContext);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Logout =()=>{
    setAccount("")
  }
  return (
    <Box>
      <Typography style={{ marginTop: 5, cursor:"pointer" }} onClick={handleClick}>
        {account}
      </Typography>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose() ; Logout();}}>
            <PowerSettingsNewIcon fontSize="small" color="primary" style={{marginRight: 2}}/>
            Logout</MenuItem>
      </Menu>
    </Box>
  );
}

export default Profile;
