import React from "react";

const Local = () => (
  <div>
    <h2>local.co.uk</h2>
    <iframe
      width="100%"
      src="https://www.youtube.com/embed/3pgBh1f8j2c"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="local.co.uk demo"
    />
    <p>
      Tech lead on the project to build a full ecommerce platform, seller
      interface and API 14 weeks for local artisans to sell handmade and bespoke
      products.
    </p>
    <p>
      Highly performant and scalable, built in python and react.js, hosted on
      amazon AWS.
    </p>
  </div>
);

const Shifts = () => (
  <div>
    <h2>shifts</h2>
    <img alt="part of my portfolio" src="/shifts.jpg" style={{ width: "100%" }} />
    <p>
      <a
        href="https://digitalblog.coop.co.uk/2018/04/23/shifts-is-now-available-to-all-food-store-colleagues/"
        target="_blank"
        rel="noopener noreferrer"
      >
        shifts
      </a>{" "}
      is a website that allows colleagues in Co-op food stores to see their
      shifts, team schedule, shift preferences and break entitlements.
    </p>
    <p>
      Shifts is now live in Co-op food stores and being used by over 50 000
      colleagues.
    </p>
  </div>
);

const ServiceManual = () => (
  <div>
    <h2>digital service manual</h2>
    <img alt="part of my portfolio" src="/service-manual.png" style={{ width: "100%" }} />
    <p>
      Co-op's{" "}
      <a
        href="https://digital-service-manual.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        digital service manual
      </a>{" "}
      is a set of guidelines for how Co-op digital design, architect and build
      services in a user centric and accessible way.
    </p>
  </div>
);

const ProductFinder = () => (
  <div>
    <h2>product finder</h2>
    <img alt="part of my portfolio" src="/product-finder.jpg" style={{ width: "100%" }} />
    <p>
      A product finder built for Co-op's customer care team, cutting a 20 minute
      job down to seconds.
    </p>
  </div>
);
const StoreDashboard = () => (
  <div>
    <h2>store dashboard</h2>
    <img alt="part of my portfolio" src="/store-dashboard.jpg" style={{ width: "100%" }} />
    <p>We built a store dashboard as a trial for Co-op food stores which updates in real time.</p>
  </div>
);

const Other = () => <div>
<div>
  <h2>Co-op membership campgain</h2>
  <img alt="part of my portfolio" src="/membership.jpg" style={{ width: "100%" }} />
  <p>
    the{" "}
    <a
      href="https://www.coop.co.uk/membership/join-us"
      target="_blank"
      rel="noopener noreferrer"
    >
      Co-op membership 'Join Us' campgain
    </a>.
  </p>
</div>
<div>
  <p>
    have you ever wanted to know if{" "}
    <a
      href="https://isdonaldtrumpawake.herokuapp.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      donald trump is awake right now?
    </a>
  </p>
</div>
</div>

const MPP = () =>   <div>
    <h2>
      <a href="https://www.mppglobal.com/">mpp global solutions</a>
    </h2>

    <p>my work for MPP global is their intellectual property but included:</p>
    <ul>
      <li>Completed a time and business sensitive project to add multi language support to an entire CRM system to land a multi million pound deal for the business.</li>
      <li>custom cryptographic implementation</li>
    </ul>
  </div>

const Portfolio = () => (
  <div id="portfolio">
    <h1 className="SectionTitle">portfolio</h1>
    <Local />
    <Shifts />
    <ServiceManual />
    <ProductFinder />
    <StoreDashboard />
    <Other />
    <MPP />
  </div>
);

export default Portfolio;
