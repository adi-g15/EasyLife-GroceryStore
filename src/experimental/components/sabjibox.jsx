import React, { Component, useState } from "react"
import { Grid } from "@material-ui/core";

class SabjiBox extends Component {
    constructor(props) {
        /**
         * @notes @advices about state ->
         * 
         * 1. only place where you should directly assign to this.state is the constructor
         * 
         * 2. Treat this.state like if it's immutable
         * 
         * 3. If the new state depends upon the previous state, PASS A FUNCTION TO setState() instead of directly accessing this.state, since multiple setState() calls maybe batched asychronously, in which case we may be accessing a newer this.state value, to prevent this, use the funciton, seince it receives the prevuious state
         * 
         * 4. State updates are merged (ie. the objects passed to setState() are merged will previous state)
         * 
         */
        super(props);
        this.state = {
            name: this.props.name || "Unknown",
             visible: this.props.visible || false,
            price: this.props.visible || 0,
            unit: this.props.unit || 'kg'
        };

        console.log(this.props);
        console.log(this.state);
    }

    setName(newName) {
        this.setState({ name: newName });
    }

    setVisibility(isVisible) {
        this.setState({ visible: isVisible });
    }

    setPrice(newPrice) {
        this.setState({ price: newPrice });
    }

    setUnit(newUnit) {
        this.setState({ unit: newUnit });
    }

    componentWillMount(){}
    componentWillUnmount(){}

    render() {
        return (
            <>
                <Grid>
                    {this.state.name}
                </Grid>
            </>
        )
    }
}

export default SabjiBox;
