import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.sizes.container};
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
`;

const Title = styled(Link)`
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
`;

const ThemeButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 8px 10px;
  font-weight: 600;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;

export default function Header() {
    return (
        <HeaderBar>
            <Inner>
                <Title to="/">Portfolio</Title>

                <Right>
                    <Nav />
                    <ThemeButton type="button" aria-label="Toggle theme (coming soon)">
                        Theme
                    </ThemeButton>
                </Right>
            </Inner>
        </HeaderBar>
    );
}