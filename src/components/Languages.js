import React, { Component } from "react";

export default class Languages extends Component {
  render() {
    return (
      <>
        <section className="resume-section" id="languages">
          <div className="resume-section-content">
            <h2 className="mb-5">Languages</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Ukrainian - native speaker
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Russian - fluent
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                English - upper intermediate
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
      </>
    );
  }
}
