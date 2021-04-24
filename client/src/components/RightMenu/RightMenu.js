import React from 'react';
import Button from 'react-bootstrap/Card'
import { bool } from 'prop-types';
import { StyledMenu } from './RightMenuStyled';

const Menu = ({ open, ...props }) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <h1>hello</h1>
    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;