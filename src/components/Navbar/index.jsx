import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ak: {
    fontWeight: "900",
    fontSize:   "20px"
  },
  lessthen: {
    fontWeight: "900",
    fontSize:   "20px"
  },
  greaterthen: {
    fontWeight: "900",
    fontSize:   "20px"
  },
  slash: {
    fontWeight: "900",
    fontSize:   "20px"
  },
  dev: {
    fontWeight: "900",
    fontSize:   "20px"
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <span className={classes.ak}>AK</span>
          <span className={classes.lessthen}>&lt;</span>
          <span className={classes.slash}>/</span>
          <span className={classes.greaterthen}>&gt;</span>
          <span className={classes.dev}>Dev</span>
        </Typography>
          <div className={classes.navlinks}>
            <a className={classes.link}>
              Home
            </a>
            <a className={classes.link}>
              About
            </a>
            <a className={classes.link}>
              Contact
            </a>
            <a className={classes.link}>
              FAQ
            </a>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;