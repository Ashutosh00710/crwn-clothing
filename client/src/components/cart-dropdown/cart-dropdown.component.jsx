import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
 
import CartItem from '../cart-items/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, DropdownButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            { cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                ))
              ) : (
                  <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
              )
            }
        </CartItemsContainer>
        <DropdownButton onClick={ () => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            } 
        } >GO TO CHECKOUT</DropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));