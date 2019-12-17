import React, { Component } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import NavLink from "../NavLink/NavLink";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

// Class Based React Component
class Navbar extends Component {
  constructor(props) {
    super(props);
    // Default CSS class to apply to the Component
    this.state = {
      condensedMenuActive: false,
      condensedMenu: "",
      // pageMark controls the triangle that marks which page the user is on.
      // Passing 0-3 as a prop into this component controls where it displays.
      pageMark: ["", "", "", ""],
      // menuItems are careated in order of the following array.
      menuItems: ["My Directory", "Community", "Forum", "Book a Trip"],
      // The link end points for each menu item.
      menuLinks: ["/", "/", "/", "/"],
      // Each item in this array is a set for the dropdown on each menu link.
      // This is an example for one drop menu item: { text: 'Explore People', to: '/' }
      menuDropDown: [[], [], [], []]
    };
  }

  // Handles activating the hamburger animation and displays the menu.
  handleCondensedMenuClick = () => {
    this.setState({ condensedMenuActive: !this.state.condensedMenuActive })
    if (this.state.condensedMenuActive === false) {
      this.setState({ condensedMenu: "Navbar__show" });
    } else {
      this.setState({ condensedMenu: "" });
    }
  }

  // Sets the location of the triangle on the menu.
  setPageMarker = () => {
    let setPage = [];
    for (let i = 0; i < 4; i++) {
      if (i === this.props.page) {
        setPage.push("Navbar__show");
      } else {
        setPage.push("");
      }
    }
    this.setState({ pageMark: setPage });
  }

  // Creates the menu. If a 1 is passed into the function, drop down menus are created.
  // Once link end points are known, they can be put into state and put in via this function
  setMenu = (type) => {
    if (type === 1) {
      return this.state.menuItems.map((item, key) => (
        <div className="Navbar__link-item">
          <NavLink text={item} to={this.state.menuLinks[key]} menuList={this.state.menuDropDown[key]} />
          <div className={`Navbar__triangle ${this.state.pageMark[key]}`}></div>
        </div>
      ));
    } else {
      return this.state.menuItems.map((item, key) => (
        <div className="Navbar__link-item">
          <NavLink text={item} to="/" menuList={[]} />
        </div>
      ));
    }
  }

  clickHandler = () => {
    console.log("Clicked!")
  }

  componentWillMount() {
    this.setPageMarker();
  }

  render() {
    return (
      <div className="Navbar">
        <div className="Navbar__logo">
          <Logo clickable to="/route" />
        </div>
        <div className="Navbar__main">
          <div className="Navbar__menu">{this.setMenu(1)}</div>
          <div className="Navbar__right">
            <Icon icon={"search"} size="2x" onClick={this.clickHandler} />
            <Icon icon={["far", "comment-dots"]} size="2x" onClick={this.clickHandler} />
            <ProfilePicture type="extra-small" link="#" image={this.props.profileImage} />
          </div>
        </div>
        <div className="Navbar__burger">
          <Burger onClick={this.handleCondensedMenuClick} active={this.state.condensedMenuActive} />
          <div className={`Navbar__condensed-menu ${this.state.condensedMenu}`}>
            {this.setMenu()}
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  page: PropTypes.number
};

Navbar.defaultProps = {
  page: 1
};

export default Navbar;
