import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

export default class Button extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        clickHandler: PropTypes.func,
    };

    state = {
        isClicked: false,
    };

    handleClick = () => {
        this.setState({ isClicked: true });
        this.props.clickHandler(this.props.name);
        setTimeout(() => {
            this.setState({ isClicked: false });
        }, 80); // Change the duration as needed
    }

    render() {
        const buttonStyle = this.state.isClicked ? { backgroundColor: "grey" } : {};
        if (this.props.name === "+" || this.props.name === "-" || this.props.name === "x" || this.props.name === "/" || this.props.name === "=" || this.props.name === "^") {
            return (
                <div className="component-button component-button-orange">
                    <button style={buttonStyle} onClick={this.handleClick}>{this.props.name}</button>
                </div>
            )
        } else if (this.props.name === "." || this.props.name === "%" || this.props.name === "+/-" || this.props.name === "AC") {
            return (
                <div className="component-button component-button-grey">
                    <button style={buttonStyle} onClick={this.handleClick}>{this.props.name}</button>
                </div>
            )
        }
        return (
            <div className="component-button">
                <button style={buttonStyle} onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}
