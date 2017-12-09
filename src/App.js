import React, { Component } from 'react';
import './App.css';
import github from './logos/github.svg';

const Header = () => (
  <div className="Header">
    <h1 className="Logo">S</h1>
    <nav>
      <ul className="Nav">
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#work">work</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  </div>
);

const Contact = () => (
  <div id="contact">
    <div className="SectionTitle">Contact</div>
    <div className="SectionContent">
      <ul className="ContactList">
        <li>
          <span>Github: </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/simonstead"
          >
            @simonstead
          </a>
        </li>
        <li>Phone: +447455174786</li>
      </ul>
    </div>
  </div>
);

const Work = () => (
  <div id="work">
    <h2 className="SectionTitle">Work</h2>
    <div className="SectionContent">
      <img src={github} alt="Github Logo" className="logo" />
      <div id="bio">
        <p>I&#39;m Simon, a mathematician and full stack software developer.</p>
        <p>
          I Currently work at{' '}
          <a
            href="https://twitter.com/CoopDigital"
            target="_blank"
            rel="noopener noreferrer"
          >
            @CoopDigital
          </a>.
        </p>
        <p>
          Scalable web applications, infrastructure as code. React, Node.js,
          python,...
        </p>
        <p>
          I work in Agile multidisciplinary teams, proponent of Woody
          Zuill&#39;s #NoEstimates
          http://softwaredevelopmenttoday.com/noestimates/
        </p>
        <p>I'm always interested in working on new & interesting projects.</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="Testimonials">
    <h2 className="SectionTitle">Testimonials</h2>
    <Testimonial />
    <Testimonial />
  </div>
);

const Testimonial = () => (
  <div className="Testimonial">
    <img src={github} className="face" alt="face of testimonial" />
    <p>
      "Simon's an excellent developer and completely overhauled the design of my
      website, in record time and under budget"
      <br />
      - Sarah Kaston
    </p>
  </div>
);

const CallToAction = () => (
  <a href="#something">
    <div className="Button">
      Contact me for my current day rate and availability for work.
    </div>
  </a>
);

class App extends Component {
  render() {
    return (
      <div className="App" id="home">
        <Header />
        <div className="Content">
          <Work />
          <CallToAction />
          <Testimonials />
          <CallToAction />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
