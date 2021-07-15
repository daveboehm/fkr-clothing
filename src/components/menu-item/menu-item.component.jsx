import React from 'react'
import './menu-item.styles.scss'

const MenuItem = (props) => (
    <div className={`menu-item ${props.size}`} style={{
        backgroundImage: `url(${props.imageUrl})`
    }}>
        <div className="content">
            <h1 className="title">{props.title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)

export default MenuItem
