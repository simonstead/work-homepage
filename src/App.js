import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Available from './Available'
import Tags from './Tags'

const Work = () => (
  <div id="work">
    <h1 className="SectionTitle">work</h1>
    <Tags />
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
  <div className="Button">
    <a href="/#contact">
      <p>Contact me for my current day rate and availability for work.</p>
    </a>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App" id="home">
        <Header />
        <div className="Content">
          <Available />
          <Work />
          <CallToAction />
          <Portfolio />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
