import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 19,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 2px",
  },
}));

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge sx={{ color: "#ffffffff" }}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
