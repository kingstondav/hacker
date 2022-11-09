import React from "react";
import AppBar from "@mui/material/AppBar";
import styles from "./Header.module.scss";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../../assets/icons/hacker.png";
import SearchBar from "../search";

const Header = (props) => {
  const { searching, searchString, matches } = props;
  console.log(matches);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.header} position="static">
        <Toolbar variant="dense">
          <img className={styles.header__logo} src={Logo} alt="logo" />
          <Typography
            className={styles.header__logo__title}
            variant="h6"
            color="inherit"
            component="div"
          >
            Hacker News
          </Typography>
          <Box sx={{ flexGrow: 1, ml: "10px" }}>
            <SearchBar
              searching={(data) => searching(data)}
              searchString={searchString}
            />
          </Box>
          <IconButton className={styles.header__user}>
            <AccountCircle
              sx={{
                fontSize: "30px",
                borderRadius: "12px",
                backgroundColor: "#f6f6ef",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
