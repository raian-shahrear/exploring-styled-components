import styled from "styled-components";

const Banner = styled.section`
  background: url(/resources/banner.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
`;

const Overly = styled.div`
  background: ${(props) =>
    props.theme.light === "light"
      ? "hsla(0, 0%, 0%, 0.0)"
      : "hsla(0, 0%, 0%, 0.3)"};
  width: 100%;
  height: 100%;
`;

const ContentBox = styled.div`
  background: ${(props) =>
    props.theme.light === "light"
      ? "hsla(0, 0%, 100%, 0.4)"
      : "hsla(0, 0%, 0%, 0.6)"};
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) =>
    props.theme.light === "light" ? props.colorLight : props.colorDark};
`;

const Image = styled.div`
  background: url(${(props) => props.theme.light === "light" ? props.srcLight : props.srcDark});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.9;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transition: all linear 0.3s;
  &:hover {
    background-color: ${(props) =>
      props.theme.light === "light"
        ? "hsla(0, 0%, 100%, 0.4)"
        : "hsla(0, 0%, 0%, 0.6)"};
  }
`;

export { Banner, Overly, ContentBox, Image };
