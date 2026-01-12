import styled from 'styled-components';

const Skip = styled.a`
  position: absolute;
  left: -999px;
  top: 0;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px;
  z-index: 1000;

  &:focus {
    left: 8px;
  }
`;

export default function SkipLink() {
    return <Skip href="#main">Skip to content</Skip>;
}
