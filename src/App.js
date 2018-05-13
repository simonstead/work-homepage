import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Contact from './Contact';

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

const Portfolio = () => (
  <div id="portfolio">
    <h1 className="SectionTitle">portfolio</h1>
    <p>
      <a
        href="https://digitalblog.coop.co.uk/2018/04/23/shifts-is-now-available-to-all-food-store-colleagues/"
        target="_blank"
        rel="noopener noreferrer"
      >
        shifts
      </a>{' '}
      is a website that allows colleagues in Co-op food stores to see their
      shifts, team schedule, shift preferences and break entitlements.
    </p>
    <p>
      the{' '}
      <a
        href="https://www.coop.co.uk/membership/join-us"
        target="_blank"
        rel="noopener noreferrer"
      >
        Co-op membership 'Join Us' campgain
      </a>.
    </p>
    <p>
      Co-op's{' '}
      <a
        href="https://digital-service-manual.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        digital service manual
      </a>.
    </p>
    <p>
      have you ever wanted to know if{' '}
      <a
        href="https://isdonaldtrumpawake.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        donald trump is awake right now?
      </a>
    </p>
    <div>
      <p>my work for MPP global is their intellectual property but included:</p>
      <ul>
        <li>retrofitting a localisation and i18n solution</li>
        <li>custom cryptographic implementation</li>
      </ul>
    </div>
  </div>
);

const CallToAction = () => (
  <div className="Button">
    <a href="mailto:simonstead@me.com">
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
