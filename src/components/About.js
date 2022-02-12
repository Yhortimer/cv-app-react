import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Khryplyvyi
              <span className="text-primary">Ihor</span>
            </h1>
            <div className="subheading mb-5">
              Lviv +38(066)0448891
              <a href="mailto:name@email.com"> igorhryplyvyy@gmai.com</a>
            </div>
            <p className="lead mb-5">
              Result-oriented quality assurance engineer with 2+ years of
              expertise in a fast-paced Web startup with quick application
              development life cycles. I have a strong desire to be a dedicated
              software developer and is not intimidated to do my best to reach
              my purpose.
            </p>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/khryplyvyi/"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="social-icon" href="https://github.com/Yhortimer">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </>
    );
  }
}
