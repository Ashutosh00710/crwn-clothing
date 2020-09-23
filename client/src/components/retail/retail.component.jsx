import React from "react";
import FormInput from "../form-input/form-input.component";
import CoustomButton from "../coustom-button/coustom-button.component";
import {
  RetailFormContainer,
  DescriptionVideoContainer,
  DescriptionContainer,
  VideoContainer,
} from "./retail.styles";
import {
  firestore,
  createRegisterCompanyDocument,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Video from "../../assets/hand.mp4";

class Retail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: "",
      company: "",
      address: "",
      email: "",
      contact: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const userRef = firestore
      .collection("users")
      .doc(`${this.props.currentUser.id}`);
    userRef.set(
      {
        role: "retailer",
      },
      { merge: true }
    );
    createRegisterCompanyDocument(this.state);
    this.setState({
      owner: "",
      company: "",
      address: "",
      email: "",
      contact: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <RetailFormContainer>
        <h1>Become Retailer and Sell your Stuffs on Crown Clothing</h1>
        <DescriptionVideoContainer>
          <DescriptionContainer>
            <h2>
              Fill the form below and you are good to go{" "}
              <span role="img" aria-label="smile">
                🙂🤝🏻
              </span>
            </h2>
            <p style={{ textAlign: "justify" }}>
              Nulla dolore Lorem Lorem Lorem pariatur consectetur tempor dolor
              eiusmod aliquip in aute do commodo. Voluptate in in labore velit
              do anim id laborum excepteur eu laborum. Id non irure ea proident
              id consequat labore cupidatat reprehenderit. Tempor consequat
              cupidatat officia pariatur eiusmod culpa Lorem cupidatat.
              Voluptate elit minim ullamco cillum ut laborum ut et sit.
            </p>
          </DescriptionContainer>
          <VideoContainer autoPlay muted loop>
            <source src={Video} type="video/mp4"></source>
          </VideoContainer>
        </DescriptionVideoContainer>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="owner"
            type="text"
            value={this.state.owner}
            label="Company Owner Name"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="company"
            type="text"
            value={this.state.company}
            label="Name of Company"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="address"
            type="text"
            value={this.state.address}
            label="Address of Company"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Official/Company Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="contact"
            type="number"
            value={this.state.contact}
            label="Contact Info of Company"
            handleChange={this.handleChange}
            required
          />
          <CoustomButton type="submit">Register My Company</CoustomButton>
        </form>
      </RetailFormContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Retail);
