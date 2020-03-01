import React, { Fragment } from "react"
import { NavLink } from "react-router-dom"
import { List, Icon } from "semantic-ui-react"

const MenuItems = ({ fixed, handleOut }) => {
  return (
    <Fragment>
      <List.Item as="a" className="mb-4 py-3" onClick={handleOut}>
        <Icon name="close" inverted></Icon>
      </List.Item>
      <NavLink to="/" className="item" exact onClick={handleOut}>
        Home
      </NavLink>
      <NavLink to="/projects" className="item" exact onClick={handleOut}>
        Demo Projects
      </NavLink>
      <NavLink to="/contact" className="item" exact onClick={handleOut}>
        Contact
      </NavLink>
    </Fragment>
  )
}

export default MenuItems
