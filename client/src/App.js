import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ContactPage from "./pages/contact/contact.component";
import DetailsPage from "./pages/details/details.component";
import RetailPage from "./pages/retail/retail.component";
import Profile from "./pages/profile/profile.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
      addCollectionAndDocuments(
        "collections",
        collectionsArray.map(({ title, items }) => ({ title, items }))
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/contact" component={ContactPage} />
          <Route path="/details" component={DetailsPage} />
          <Route
            exact
            path="/retailer"
            render={() =>
              this.props.currentUser ? (
                this.props.currentUser.role ? (
                  <Redirect to="/profile" />
                ) : (
                  <RetailPage />
                )
              ) : null
            }
          />
          <Route
            path="/profile"
            render={() =>
              this.props.currentUser ? (
                this.props.currentUser.role ? (
                  <Profile />
                ) : (
                  <Redirect to="/" />
                )
              ) : null
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
