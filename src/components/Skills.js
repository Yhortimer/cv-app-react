import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <>
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-css3-alt" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-bootstrap" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-wix" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-git" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-jira" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-figma" />
              </li>
            </ul>
            <div className="subheading mb-3">Highlights of Qualifications</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Familiarity with JavaScript programming language, HTML, CSS and
                related technologies
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Basic knowledge in React
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Familiarity with MVC model
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Vast experience in testing and configuration gambling games
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Cross Browser Testing &amp; Debugging
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Strong knowledge in SDLC
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Agile Development &amp; Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
      </>
    );
  }
}
