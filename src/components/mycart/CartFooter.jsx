import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Component = styled(Box)`
  position: fixed;
  bottom: 0;
  background: #efefef;
  width: 100%;
  height: 14rem;
`;
const Text = styled(Typography)`
  margin: 2rem;
  font-size: 14px;
  color: #0000007a;
`;

function CartFooter() {
  return (
    <Component id="cart-footer">
      <Divider />
      <Text>
        Policies:Returns PolicyTerms of useSecurityPrivacyInfringement©
        2007-2023 Flipkart.com
      </Text>
    </Component>
  );
}

export default CartFooter;
