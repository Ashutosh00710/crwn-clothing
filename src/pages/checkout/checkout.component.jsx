import React from 'react';

import { CheckoutPageContainer, CheckoutHeader, HeaderBlock, Total, TestWarning } from './checkout.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartItems , selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key= {cartItem.id} cartItem={cartItem}/>
            ))
        }
    <Total>
        Total: ${total}
    </Total>
    <TestWarning>
        *Please use following details for payment testing*
        <br/>
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </TestWarning>
    <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
); 

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);