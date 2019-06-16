

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'


const MenuItems = ({ fixed, handleOut }) => {

    return (
        <Fragment>
            <NavLink to="/" className="item" exact onClick={handleOut}>Home</NavLink>
            <NavLink to="/projects" className="item" exact onClick={handleOut}>Projects</NavLink>
            <NavLink to="/about" className="item" exact onClick={handleOut}>About</NavLink>
        </Fragment>
    )
}

export default MenuItems
