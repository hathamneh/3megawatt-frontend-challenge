import styled from '@emotion/styled'
import React from "react";
import {NavLink} from "react-router-dom";

const NavContainer = styled.nav`
  margin-right: 16px;
  margin-top: 48px;
`

const NavLinkStyled = styled(NavLink)`
  padding: 16px 16px 16px 32px;
  margin-bottom: 4px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  transition: all .2s;
  border-radius: 0 55px 55px 0;

  &:hover {
    background-color: rgba(80,80,80, 0.05);
  }
  &.active {
    background-color: rgb(203, 244, 255);
  }
`

const Nav: React.FC = () => (
  <NavContainer>
    <NavLinkStyled exact activeClassName="active" to="/">Reports</NavLinkStyled>
    <NavLinkStyled exact activeClassName="active" to="/plants">All Plants</NavLinkStyled>
    <NavLinkStyled exact activeClassName="active" to="/plants/new">Add New Plant</NavLinkStyled>
  </NavContainer>
)

export default Nav