import styled from '@emotion/styled'
import React from "react";
import {Link} from "react-router-dom";

const NavContainer = styled.nav`
  margin-right: 16px;
  margin-top: 48px;
`

const NavLink = styled(Link)`
  padding: 16px 16px 16px 32px;
  margin-bottom: 4px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  transition: all .2s;
  &:hover {
    background-color: rgba(80,80,80, 0.05);
    border-radius: 0 55px 55px 0;
  }
`

const Nav: React.FC = () => (
  <NavContainer>
    <NavLink to="/">Dashboard</NavLink>
    <NavLink to="/plants">All Plants</NavLink>
    <NavLink to="/plants/5">Add New Plant</NavLink>
  </NavContainer>
)

export default Nav