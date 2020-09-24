import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ShopIcon from "@material-ui/icons/Shop";
import ListItemText from "@material-ui/core/ListItemText";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CallMergeIcon from "@material-ui/icons/CallMerge";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      right: false,
    };
  }

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ [anchor]: open });
  };

  list = (anchor) => (
    <div
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
      style={{
        width: "15rem",
        backgroundColor: "#333",
        color: "#ffffff",
        height: "100%",
      }}
    >
      <List>
        <Link to="/shop" style={{ textDecoration: "none", color: "#ffffff" }}>
          <ListItem button>
            <ShopIcon style={{ marginRight: "1rem" }} />
            <ListItemText primary="SHOP" />
          </ListItem>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          <ListItem button>
            <ContactMailIcon style={{ marginRight: "1rem" }} />

            <ListItemText primary="CONTACT" />
          </ListItem>
        </Link>
        <Link to="/signin" style={{ textDecoration: "none", color: "#ffffff" }}>
          {this.props.currentUser ? (
            <ListItem button onClick={() => auth.signOut()}>
              <ExitToAppIcon style={{ marginRight: "1rem" }} />
              <ListItemText primary="SIGN OUT" />
            </ListItem>
          ) : (
            <ListItem button>
              <ExitToAppIcon style={{ marginRight: "1rem" }} />
              <ListItemText primary="SIGN IN" />
            </ListItem>
          )}
        </Link>
        {this.props.currentUser ? (
          this.props.currentUser.role ? (
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <ListItem button>
                <CallMergeIcon style={{ marginRight: "1rem" }} />
                <ListItemText primary="PROFILE" />
              </ListItem>
            </Link>
          ) : (
            <Link
              to="/retailer"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <ListItem button>
                <CallMergeIcon style={{ marginRight: "1rem" }} />
                <ListItemText primary="JOIN US" />
              </ListItem>
            </Link>
          )
        ) : null}
      </List>
    </div>
  );
  render() {
    return (
      <div>
        <React.Fragment key={"right"}>
          <Button onClick={this.toggleDrawer("right", true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={"right"}
            open={this.state.right}
            onClose={this.toggleDrawer("right", false)}
            onOpen={this.toggleDrawer("right", true)}
          >
            {this.list("right")}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Drawer);
