import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Available from './Available'
import Tags from './Tags'
import AnalyticsWrapper from './AnalyticsWrapper'
import {BrowserRouter} from 'react-router-dom'


const Work = () => (
  <div id="work">
    <h1 className="SectionTitle">work</h1>
    <Tags />
    <div className="SectionContent">
      <div id="bio">
        <p>I&#39;m Simon, a full stack agile software developer.</p>
        <p>
          I build software as a means to an end, to help users with real user needs with a data driven approach.
        </p>
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
      <BrowserRouter>
        <AnalyticsWrapper>
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
        </AnalyticsWrapper>
      </BrowserRouter>
    );
  }
}

export default App;
