import React from 'react';

import { bool } from 'prop-types';
import { StyledMenu } from './MenuStyled';
import { Link } from 'react-router-dom';

const Menu = ({ open, ...props }) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
  return (
    <StyledMenu open={!open} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Products
      </Link>
      <Link to="/cart" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Cart
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;