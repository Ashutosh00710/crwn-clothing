import React from 'react';

import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions';
import { CollectionItemContainer, BackgroundImage, FooterContainer, Name, Price, AddButton } from './collection-item.styles';

const CollectionItem  = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return(
    <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl = {imageUrl}/>
        <FooterContainer>
            <Name>{name}</Name>
            <Price>${price}</Price>
        </FooterContainer>
            <AddButton onClick= { () => addItem(item) }  inverted> ADD TO CART </AddButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);