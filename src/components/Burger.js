import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/images/logo.svg";
import cros from "../assets/images/cros.png";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: (param) => (param.isOpen ? "static" : "absolute"),
    top: "40px",
    width: "100%",
    height: "40px",
    paddingLeft: (param) => (param.isOpen ? "0" : "10%"),
    paddingRight: (param) => (param.isOpen ? "0" : "10%"),
    zIndex: "2",
    color: "red",
  },
  logo: {
    width: "60px",
    height: "40px",
  },
  logo: {
    width: "50px",
    height: "50px",
  },
  burgerBox: {
    cursor: "pointer",
  },
  bar: {
    width: "42px",
    height: "2px",
    backgroundColor: "#333",
    margin: "7px 0",
    transition: "0.4s",
  },
}));

export default function Burger({ color, click, isOpen }) {
  const param = { color, isOpen };
  const classes = useStyles(param);

  return (
    <Box className={classes.logoBox}>
      <Box className={classes.logo}>
        <img className={classes.logo} src={logo} alt="logo"></img>
      </Box>
      <Box className={classes.burgerBox} onClick={click}>
        {isOpen ? (
          <img className={classes.cros} src={cros} alt="cros"></img>
        ) : (
          <div className={classes.burger}>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
          </div>
        )}
      </Box>
    </Box>
  );
}