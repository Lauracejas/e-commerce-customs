import React from 'react';

import { bool } from 'prop-types';
import { StyledMenu } from './RightMenuStyled';

const Menu = ({ open, ...props }) => {
    const isHidden = open ? true : false;
  
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