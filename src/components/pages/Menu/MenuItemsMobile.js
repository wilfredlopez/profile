

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'


const MenuItems = ({ fixed }) => {

    return (
        <Fragment>
            <NavLink to="/" className="item" exact>Home</NavLink>
            <NavLink to="/projects" className="item" exact>Projects</NavLink>
            <NavLink to="/about" className="item" exact>About</NavLink>
        </Fragment>
    )
}

export default MenuItems
