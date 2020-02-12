import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ collection }) => (
            <div className="shop-page">
                {
                    collection.map(({id, ...otherCollectionProps }) =>(
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
);

const mapDispatchToProps =  createStructuredSelector({
    collection: selectCollection
});

export default connect(mapDispatchToProps)(ShopPage);