import React, { Component } from 'react';
import './App.css';

const Header = () => (
  <div className="Header">
    <h1 className="Logo">S</h1>
    <nav>
      <ul className="Nav">
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
    <h1 className="SectionTitle">contact</h1>
    <div className="SectionContent">
      <ul className="ContactList">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/simonstead"
          >
            @simonstead
          </a>
        </li>
        <li>+447455174786</li>
      </ul>
    </div>
  </div>
);

const Work = () => (
  <div id="work">
    <h1 className="SectionTitle">work</h1>
    <div className="SectionContent">
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
          I prefer to build my front ends using react/redux, and build back ends
          in javascript, python and go. Deployment preferences include docker
          and kubernetes.
        </p>
        <p>
          Advocate of domain driven design, test driven development and
          #noestimates.
        </p>
        <p>I'm always interested in working on new & interesting projects.</p>
      </div>
    </div>
  </div>
);

const CallToAction = () => (
  <div>
    <a href="#something">
      <div className="Button">
        Contact me for my current day rate and availability for work.
      </div>
    </a>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App" id="home">
        <Header />
        <div className="Content">
          <Work />
          <CallToAction />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
