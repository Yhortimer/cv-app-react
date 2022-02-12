import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <>
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">West Ukrainian National University</h3>
                <div className="subheading mb-3">Master of Finance</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">September 2011 - May 2016</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </>
    );
  }
}
