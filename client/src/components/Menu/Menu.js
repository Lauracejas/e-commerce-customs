import React from 'react';

import { bool } from 'prop-types';
import { StyledMenu } from './MenuStyled';

const Menu = ({ open, ...props }) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Products
      </a>
      <a href="/cart" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Cart
      </a>
      <a href="/profile" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Profile
      </a>
      

       
    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;