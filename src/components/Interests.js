import React, { Component } from "react";

export default class Interests extends Component {
  render() {
    return (
      <>
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a quality assurance engineer I enjoy most of my
              time developing mobile and computer games using Construct 3 game
              engine.
            </p>
            <p className="mb-0">
              Also I spend a large amount of my free time studying advancements
              in the front-end web development world. From time to time, when
              forced indoors and want to get some relax hours, I follow a number
              of sci-fi and fantasy genre books and movies.
            </p>
          </div>
        </section>
        <hr className="m-0" />
      </>
    );
  }
}
