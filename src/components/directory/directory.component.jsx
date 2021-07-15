import React, { Component } from 'react'
import MenuItem from 'components/menu-item/menu-item.component'
import './directory.styles.scss'
import { sections } from './directory.data'

class Directory extends Component {
    constructor() {
        super()

        this.state = {
            sections
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(section => (
                        < MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} />
                    ))
                }

            </div>
        )
    }
}

export default Directory
