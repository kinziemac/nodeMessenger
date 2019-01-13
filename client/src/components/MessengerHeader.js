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

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleColorChange.bind(this));
  // }

  // handleColorChange() {
  //   const header = document.getElementById("LandingHeader");
  //   const about = document.getElementById("About");
    
  //   //making header appear
  //   if (window.pageYOffset > about.offsetTop - 5) {
  //     header.style.opacity = "1";
  //   } else {
  //     header.style.opacity = "1";
  //   }

  // }

  // handleSelectSection(section) {
  //   this.setState({ selectedHeading: section }, () => {
  //     this.props.onScroll(section);
  //   });
  // }

  render() {
    const { pages } = this.props
    const windowWidth = window.innerWidth

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