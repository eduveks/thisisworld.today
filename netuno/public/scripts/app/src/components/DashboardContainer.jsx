import React, { Component } from "react";

import MyButton from "../presentational/MyButton.jsx";

import styles from "./DashboardContainer.less";

export default class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.button = React.createRef();
        this.click = this.click.bind(this);
    }

    componentWillMount() {
        /*
        // Sample of service AJAX call:
        fetch('/services/my-test.netuno', {
            credentials: 'include'
        }).then((response) => {
            return response.json();
        }).then((json) => {
            // json...;
        });
        */
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        $(this.button.current).fadeOut(250).fadeIn(250);
    }

    click() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        const { counter } = this.state;
        return (
            <div className="my-dashboard">
                <div className={ styles.myDashboardButton }>
                    <MyButton mainRef={ this.button } text={ `Click me! ${ counter }` } click={ this.click } />
                </div>
            </div>
        );
    }
}
