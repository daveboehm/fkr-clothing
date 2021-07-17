import React from 'react'
import './collection-item.styles.scss'

export const CollectionItem = (props) => {
    const { name, imageUrl, price } = props;

    return (
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">$ {price}.00</span>
            </div>
            
        </div>
    )
}
