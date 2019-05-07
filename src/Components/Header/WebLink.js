import React, { Component } from "react";


class Weblink extends Component {
    render() {
        var anchorStyle = {
            margin: "3vw"
        }

        return (
        <a
            style={anchorStyle}
            className={this.props.name}
            target="_blank"
            href={this.props.link}
            rel="noopener noreferrer"
            title={this.props.name}
        >
            <img
            className="webLinkIcon"
            src={this.props.pic}
            alt={this.props.name + " icon"}
            />
        </a>
        );
    }
}

export default Weblink;