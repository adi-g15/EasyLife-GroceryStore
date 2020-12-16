import React from "react";
import { Container } from "@material-ui/core"
import SabjiBox from "./sabjibox"

class SabjiArea extends React.Component {

    /**
     * @note -> Currently i am providing two ways to get the list of sabjis
     *          1. Pass from the main application as `props` to this
     *          2. Fetch when this component begins to mount, in componentWillMount() lifetime method
     */
    constructor( props ) {
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        // fetch all sabji lists
        const fetchedSabjis = [];
        
        this.setState({list: fetchedSabjis})
    }

    render() {
        return (
            <Component>
                { this.state.list.map(
                    (sabji, index) => <SabjiBox props={sabji} />
                )}
            </Component>
        )
    }
}

export default SabjiArea;
