import React, { Component } from "react";
import { func } from "prop-types";
import { Link } from "react-router-dom";
import "./styles/MessengerHeader.scss";

export default class MessengerHeader extends Component {
  static propTypes = {
    onScroll: func
  };

  state = {
    selectedHeading: "Home"
  };

  render() {
    const { pages } = this.props

    return (
      <div id="LandingHeader">
          <div id="LandingHeaderInner">
            {pages.map(page => {
              return (
                <Link to={page.link} key={page.link}>
                  <div
                    className="SectionHeading"
                  >
                    <p>
                      <b>{page.title}</b>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
      </div>
    );
  }
}