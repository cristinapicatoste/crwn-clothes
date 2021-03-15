import React from 'react';
import CollectionItem from '../ColletionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({title, items}) => {
  console.log(items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...item}) => (
          <CollectionItem key={id} {...item} />
          // <div key={item.id} >{item.name}</div>
        ))}
      </div>
    </div>
  )
}

export default CollectionPreview;
