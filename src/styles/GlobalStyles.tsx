import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{ box-sizing:border-box; }
  html,body,#root{ height:100%; }
  body{
    margin:0;
    font-family:${({ theme }) => theme.fonts.body};
    color:${({ theme }) => theme.colors.text};
    background:${({ theme }) => theme.colors.bg};
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }
  a{
    color:inherit;
    text-decoration:none;
  }
  a:hover{
    text-decoration:underline;
  }
  a:visited,
  a:active{
    color:inherit;
  }

  :focus-visible{
    outline:3px solid ${({ theme }) => theme.colors.focus};
    outline-offset:2px;
  }
`;
