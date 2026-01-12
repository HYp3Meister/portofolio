import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    /* text-decoration: underline; */
    color: ${({ theme }) => theme.colors.primaryText};
}

&[aria-current='page'] {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryText};
    /* text-decoration: underline; */
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;

export default function Nav() {
    return (
        <NavWrapper aria-label="Main navigation">
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/about">About</StyledNavLink>
            <StyledNavLink to="/projects">Projects</StyledNavLink>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
        </NavWrapper>
    );
}