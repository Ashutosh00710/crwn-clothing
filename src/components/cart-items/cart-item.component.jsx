import React from 'react';

import { CartItemContainer, Image, Name, ItemDetails } from './cart-item.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <Image src={imageUrl}/>
        <ItemDetails>
        <Name>{name}</Name>
        <span>
            {quantity} x ${price}
        </span>
        </ItemDetails>
    </CartItemContainer>
);

export default CartItem;