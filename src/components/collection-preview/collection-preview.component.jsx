import React from 'react'
import './collection-preview.styles.scss'
import { CollectionItem } from 'components/collection-item/collection-item.component';

export const CollectionPreview = (props) => {

    const previewQuantity = (qty) => (_i, idx) => idx < qty;

    const { title, items } = props;

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter(previewQuantity(4))
                    .map(({ id, ...otherProps }) => (
                        <CollectionItem key={id} {...otherProps} />
                    ))
                }
            </div>
        </div>
    )
}
