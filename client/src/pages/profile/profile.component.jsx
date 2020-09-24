import React from "react";
import { firestore, insert } from "../../firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import CoustomButton from "../../components/coustom-button/coustom-button.component";
import { SelectContainer, Select } from "./profile.styles";

let id = "";

class Profile extends React.Component {
  state = {
    value: "",
    arr: [],
    id: "",
    url: "",
    name: "",
    price: "",
  };

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot((snapshot) => {
      const arr = snapshot.docs.map((doc) => {
        const { title, items } = doc.data();
        return {
          id: doc.id,
          title,
          items,
        };
      });
      this.setState({ arr: arr });
    });
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const gid = this.state.arr.filter((el) => el.id === id);
    const uid = gid[0].items[gid[0].items.length - 1].id + 1;

    const item = {
      id: uid,
      name: this.state.name,
      imageUrl: this.state.url,
      price: this.state.price,
    };

    const itemRef = firestore.collection("collections").doc(id);
    itemRef.update({
      items: insert(item),
    });
  };

  render() {
    if (this.state.value !== "") {
      id = this.state.arr.filter((el) => el.title === this.state.value)[0].id;
    }
    return (
      <div>
        Profile
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            value={this.state.name}
            label="Product Name"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="url"
            type="text"
            value={this.state.url}
            label="Image URL"
            handleChange={this.handleChange}
            required
          />
          <SelectContainer>
            <Select
              name="value"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="">Select Type</option>
              <option value="Mens">Mens</option>
              <option value="Womens">Womens</option>
              <option value="Jackets">Jackets</option>
              <option value="Sneakers">Sneakers</option>
              <option value="Hats">Hats</option>
            </Select>
          </SelectContainer>
          <FormInput
            name="price"
            type="text"
            value={this.state.price}
            label="Price"
            handleChange={this.handleChange}
            required
          />
          <CoustomButton type="submit">Add</CoustomButton>
        </form>
      </div>
    );
  }
}

export default Profile;
