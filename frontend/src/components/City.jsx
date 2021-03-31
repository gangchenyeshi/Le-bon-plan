import React from "react";

export default class Cities extends React.Component {

    render() {
        const { city } = this.props;
        return (
            <div>
                <p >{city}</p>
            </div>

        )
    }
}