import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import useStyles from "./style";
import memories from "../../images/memories (1).png";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

function Navbar() {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar
      className={classes.appBar}
      varient="h5"
      position="static"
      color="inherit"
    >
      <div className={classes.container}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
          <img className={classes.image} src={memories} alt="" height="60px" />
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.Avatar}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            SignIn
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
