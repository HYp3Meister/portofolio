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

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
`;

const A = styled.a`
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

export default function Footer() {
    return (
        <FooterBar>
            <Inner>
                <small>© {new Date().getFullYear()} Portfolio</small>
                <Links aria-label="Footer links">
                    <A
                        href="https://github.com/HYp3Meister"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </A>
                    <A
                        href="https://www.linkedin.com/in/aycan-sapmaz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </A>
                    <A href="mailto:sapmaz72@gmail.com" title='sapmaz72@gmail.com'>Email</A>
                </Links>
            </Inner>
        </FooterBar>
    );
}
