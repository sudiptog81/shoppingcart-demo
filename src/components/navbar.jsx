import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// Stateless functional component sfc

const NavBar = ({ items }) => {
  console.log("NavBar rendered");

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Your Cart
          </Typography>
          &nbsp;
          <IconButton>
            <Badge badgeContent={items} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// class NavBar extends Component {
//   render() {
//   }
// }

export default NavBar;
