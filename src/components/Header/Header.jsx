import React from 'react'
import styled from 'styled-components'

import { COLORS, WEIGHTS } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader/>
      <MainHeader>
        <Box>
          <Logo/>
        </Box>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Box/>
      </MainHeader>
    </header>
  )
}

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 24px 32px 0;
    border-bottom: 1px solid ${COLORS.gray[300]};
    height: 72px;
`

const Box = styled.div`
    flex: 1;
`

const Nav = styled.nav`
    display: flex;
    gap: 48px;
    margin-inline: 40px;
`

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`

export default Header
