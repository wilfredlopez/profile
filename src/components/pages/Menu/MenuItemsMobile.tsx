import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import { CloseOutlined as CloseIcon } from "@material-ui/icons";
interface Props {
  fixed?: boolean;
  handleOut: () => void;
}

const MenuItems: React.FC<Props> = ({ fixed, handleOut }) => {
  return (
    <Fragment>
      <ListItem className="mb-4 py-3" onClick={handleOut}>
        <CloseIcon />
      </ListItem>
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
  );
};

export default MenuItems;
