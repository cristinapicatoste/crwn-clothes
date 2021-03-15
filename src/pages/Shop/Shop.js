import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import { SHOP_DATA as collections } from '../../data/shop.data';

const Shop = () => {
  console.log(collections);

  return (
    <div className="shop-page">
      {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
      }
    </div>
  )
}

export default Shop
