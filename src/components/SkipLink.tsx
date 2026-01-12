import styled from 'styled-components';

const Skip = styled.a`
  position: absolute;
  left: -999px;
  top: ${({ theme }) => theme.space[3]};
  background: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 9999;

  &:focus {
    left: ${({ theme }) => theme.space[3]};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
  }
`;

export default function SkipLink() {
  return <Skip href="#main">Skip to content</Skip>;
}
