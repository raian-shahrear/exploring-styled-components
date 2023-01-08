import React from "react";

const Home = () => {
  return (
    <main>
      <header className="header-banner">
        <section className="header-background">
          <div className="header-text">
            <a href="https://styled-components.com/" target="_blank" rel="noreferrer"><img
              src="/resources/styled-components-light-logo.png"
              alt="styled-components-logo"
            /></a>
            
            <h1>Styled Components</h1>
            <p>
              In the "Styled Components", a component or function is created for
              providing styles in JavaScript by manipulating HTML tags. No CSS
              needs to be used here as well as the styles can be easily
              scalable, reusable and implemented dynamically.
            </p>
          </div>
        </section>
      </header>
    </main>
  );
};

export default Home;
