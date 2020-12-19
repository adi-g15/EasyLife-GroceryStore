import React from "react";
import SabjiBox from "./sabjibox"
import {
    Grid
} from "@material-ui/core"

class SabjiArea extends React.Component {

    /**
     * @note -> Currently i am providing two ways to get the list of sabjis
     *          1. Pass from the main application as `props` to this
     *          2. Fetch when this component begins to mount, in componentWillMount() lifetime method
     */
    constructor( props ) {
        super(props);

        this.state = {
            list: this.props.list
        }

        console.log(props.list);
    }

    render() {
        return (
            <div style={{flexGrow: 1}}>
                <Grid contanier>
                {
                    this.state.list.map(
                        (sabji, index) => (
                            <Grid item xs={6} sm={3} style={{textAlign: 'center'}}>
                                <SabjiBox data={sabji} key={index} />
                            </Grid>
                        )
                    )
                }
                </Grid>
            </div>
        )
    }
}

export default SabjiArea;
