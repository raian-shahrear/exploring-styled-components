import React from "react";
import Link from "../../Components/Link";
import {
  Banner,
  ContentBox,
  Image,
  Overly,
} from "../../Components/Styles/Container.styles";
import { H1, P, ThemeToggler } from "../../Components/Styles/Element.styles";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Home = ({handleTheme, isDarkTheme}) => {

  return (
    <Banner>
      <Overly>
        <ContentBox
          colorLight="hsla(0, 0%, 0%, 0.8)"
          colorDark="hsla(0, 0%, 100%, 0.8)"
        >
          <ThemeToggler onClick={handleTheme} >
            {
              isDarkTheme ? <BsToggleOn/> : <BsToggleOff/>
            }
          </ThemeToggler>
          <Link
            link="https://styled-components.com/"
            content={
              <Image
                srcLight="resources/sc-light-logo.png"
                srcDark="/resources/sc-dark-logo.png"
                width="100px"
                height="100px"
              />
            }
          />
          <H1>Styled Components</H1>
          <P>
            In the "Styled Components", a component or function is created for
            providing styles in JavaScript by manipulating HTML tags. No CSS
            needs to be used here as well as the styles can be easily scalable,
            reusable and implemented dynamically.
          </P>
        </ContentBox>
      </Overly>
    </Banner>
  );
};

export default Home;
