import styled from 'styled-components';

export const Container = styled.div`
  max-width:${({ theme }) => theme.sizes.container};
  margin:0 auto;
  padding:${({ theme }) => theme.space[4]};
`;

export const Card = styled.div`
  background:${({ theme }) => theme.colors.surface};
  border:1px solid ${({ theme }) => theme.colors.border};
  border-radius:${({ theme }) => theme.radii.xl};
  padding:${({ theme }) => theme.space[4]};
`;

export const Button = styled.button<{ $variant?: 'solid' | 'ghost' }>`
  border:1px solid ${({ theme }) => theme.colors.border};
  border-radius:${({ theme }) => theme.radii.md};
  padding:10px 14px;
  font-weight:600; cursor:pointer;
  background:${({ theme, $variant }) => $variant === 'ghost' ? 'transparent' : theme.colors.primary};
  color:${({ theme, $variant }) => $variant === 'ghost' ? theme.colors.text : theme.colors.primaryText};
  &:disabled{ opacity:.6; cursor:not-allowed; }
  &:focus-visible{ outline:3px solid ${({ theme }) => theme.colors.focus}; outline-offset:2px; }
`;
