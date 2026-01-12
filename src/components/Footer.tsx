import styled from 'styled-components';

const FooterBar = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.sizes.container};
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[4]};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
  align-items: center;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;

const StyledSmall = styled.small`
  color: ${({ theme }) => theme.colors.primaryText};
`

export default function Footer() {
  return (
    <FooterBar>
      <Inner>
        <StyledSmall>© {new Date().getFullYear()} Portfolio</StyledSmall>
        <StyledDiv aria-label="Footer links">
          <Link
            href="https://github.com/HYp3Meister"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/aycan-sapmaz/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
          <Link href="mailto:sapmaz72@gmail.com" title='sapmaz72@gmail.com'>Email</Link>
        </StyledDiv>
      </Inner>
    </FooterBar>
  );
}
