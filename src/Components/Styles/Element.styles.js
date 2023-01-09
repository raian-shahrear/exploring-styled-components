import styled from "styled-components";

const H1 = styled.h1`
  margin: 10px 0;
  font-weight: 500;
  font-size: 32px;
  font-family: "Righteous", cursive;
`;

const P = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const ThemeToggler = styled.button`
  background: transparent;
  border-color: transparent;
  margin-bottom: 20px;
  font-size: 48px;
  color: ${props => props.theme.light ? "hsla(0, 0%, 0%, 0.6)" : "hsla(0, 0%, 100%, 0.4)"};
`

export { H1, P, ThemeToggler };