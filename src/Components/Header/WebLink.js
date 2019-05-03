import React, { Component } from "react";
import Flexbox from "flexbox-react";


class Weblink extends Component {
    render() {
        return (
        <a
            class={this.props.name}
            target="_blank"
            href={this.props.link}
            title={this.props.name}
        >
            <img
            class="webLinkIcon"
            src={this.props.pic}
            alt={this.props.name + " icon"}
            />
        </a>
        );
    }
}

export default Weblink;