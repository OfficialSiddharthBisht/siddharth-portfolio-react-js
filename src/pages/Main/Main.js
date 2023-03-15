import React from "react";
// import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  // Testimonials,
  // Blog,
  Education,
  Experience,
  Contacts,
  Projects
  // Services,
  // Achievement,
} from "../../components";
// import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Skills />
      {/* <Services /> */}
      <Education />
      <Projects />
      {/* <Blog /> */}
      <Contacts />
      <Footer />
      {/* <Achievement /> */}
      {/* <Testimonials /> */}
    </div>
  );
}

export default Main;
