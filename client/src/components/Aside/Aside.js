import React from 'react';
import { bool, func } from 'prop-types';
import { StyledAside } from './AsideStyled';


const Aside = ({ open, setOpen, ...props }) => {
    const isExpanded = open ? true : false;
  
  return (
    <StyledAside aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <div />
      <div />
      <div />
    </StyledAside>
  )
}
Aside.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Aside;