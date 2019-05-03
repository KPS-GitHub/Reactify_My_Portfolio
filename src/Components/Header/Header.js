import React, { Component } from "react";
import Flexbox from "flexbox-react";

import Weblink from "./Weblink.js";

class Header extends Component {
  render() {
    return (
      <Flexbox
        flexDirection="row"
        justifyContent="space-evenly"
        maxHeight="20vh"
      >
        <Weblink
          name="GitHub"
          link="https://github.com/KPS-GitHub"
          pic="https://placeimg.com/100/100/tech"
        />
        <Weblink
          name="LinkedIn"
          link="https://www.linkedin.com/in/kennansmith/"
          pic="https://placeimg.com/100/100/tech"
        />
        <Weblink
          name="Twitter"
          link="https://twitter.com/KevinSm02334141"
          pic="https://placeimg.com/100/100/tech"
        />
      </Flexbox>
    );
  }
}

export default Header;