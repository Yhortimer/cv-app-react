import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <>
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">QA engineer</h3>
                <div className="subheading mb-3">Rolique</div>
                <p>
                  Rolique is the team of proven JS experts which specialize in
                  building scalable and reliable software solutions for
                  businesses worldwide.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March 2020 – October 2021</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">QC engineer and system configurator</h3>
                <div className="subheading mb-3">EveryMatrix</div>
                <p>
                  EveryMatrix is a leading B2B provider delivering iGaming
                  software, solutions, content and services for casino, sports
                  betting, payments, and affiliate/agent management to Tier-1
                  operators as well as to newer brands. The platform is highly
                  modular, scalable, and compliant, allowing operators to choose
                  the optimal EveryMatrix solution depending on their needs and
                  existing in-house technology and capabilities.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">July 2019 – February 2020</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Manual tester</h3>
                <div className="subheading mb-3">Testbirds</div>
                <p>
                  Testbirds is a world-leading crowdtesting provider with over
                  600000 registered testers in 193 countries.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">June 2019 - May 2021</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </>
    );
  }
}
