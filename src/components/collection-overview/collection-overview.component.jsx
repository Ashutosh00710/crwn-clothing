import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionOverview = ({ collection }) => (
    <CollectionOverviewContainer>
        {
            collection.map(({id, ...otherCollectionProps }) =>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </CollectionOverviewContainer>   
)

const mapDispatchToProps =  createStructuredSelector({
    collection: selectCollectionsForPreview
});

export default connect(mapDispatchToProps)(CollectionOverview);