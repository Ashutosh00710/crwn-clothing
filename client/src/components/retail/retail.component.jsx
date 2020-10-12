import React, { useState } from "react";
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

const Retail = ({ currentUser }) => {
  const [owner, setOwner] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userRef = firestore.collection("users").doc(`${currentUser.id}`);
    userRef.set(
      {
        role: "retailer",
      },
      { merge: true }
    );
    const id = await createRegisterCompanyDocument({
      owner,
      company,
      address,
      email,
      contact,
    });
    userRef.set(
      {
        companyId: id,
      },
      { merge: true }
    );
  };

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
            eiusmod aliquip in aute do commodo. Voluptate in in labore velit do
            anim id laborum excepteur eu laborum. Id non irure ea proident id
            consequat labore cupidatat reprehenderit. Tempor consequat cupidatat
            officia pariatur eiusmod culpa Lorem cupidatat. Voluptate elit minim
            ullamco cillum ut laborum ut et sit.
          </p>
        </DescriptionContainer>
        <VideoContainer autoPlay muted loop>
          <source src={Video} type="video/mp4"></source>
        </VideoContainer>
      </DescriptionVideoContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="owner"
          type="text"
          label="Company Owner Name"
          handleChange={setOwner}
          required
        />
        <FormInput
          name="company"
          type="text"
          label="Name of Company"
          handleChange={setCompany}
          required
        />
        <FormInput
          name="address"
          type="text"
          label="Address of Company"
          handleChange={setAddress}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Official/Company Email"
          handleChange={setEmail}
          required
        />
        <FormInput
          name="contact"
          type="number"
          label="Contact Info of Company"
          handleChange={setContact}
          required
        />
        <CoustomButton type="submit">Register My Company</CoustomButton>
      </form>
    </RetailFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Retail);
