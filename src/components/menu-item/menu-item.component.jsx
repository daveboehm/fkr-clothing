import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = (props) => {
    const linkTo = `${props.match.url}${props.linkUrl}`;
    return (
        <div className={`menu-item ${props.size}`} onClick={() => props.history.push(linkTo)}>
            <div className="background-image" style={{
                backgroundImage: `url(${props.imageUrl})`
            }}></div>
            <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
