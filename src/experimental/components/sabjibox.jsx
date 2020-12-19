import React, { Component, useState } from "react"
import { 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Typography, 
    Button, 
    ButtonGroup, 
    IconButton 
} from "@material-ui/core";
import { PlusOne, PlusOneTwoTone, FormatIndentDecrease } from "@material-ui/icons";

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
            name: this.props.data.name || "Unknown",
            visible: this.props.data.visible || false,
            price: this.props.data.visible || 0,
            unit: this.props.data.unit || 'kg',
            qntty: this.props.data.qntty || 0   // quantity
        };

        this.styles = {
            root: {
                maxWidth: 345
            }
        };

        this.increaseQntty.bind(this);
        this.decreaseQntty.bind(this);
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

    increaseQntty(){
        console.log(this.state.qntty);
        this.setState((prevState) => {
            console.log(prevState.qntty);
            return { qntty: prevState.qntty+1 }
        })
    }

    decreaseQntty(){
        this.setState((prevState) => {
            return { qntty: prevState.qntty >= 0 ? prevState.qntty + 1 : 0 }
        })
    }

    componentWillMount(){}
    componentWillUnmount(){}

    render() {
        return (
            <>
                <Card style={this.styles.root} >
                    <CardActionArea >
                        <CardMedia 
                            component="img"
                            alt={`${this.state.name}`}
                            height="140"
                            image="../../assets/temp.jpg"
                            title={this.state.name}
                        />

                        <CardContent>
                            <Typography variant="h6" component="h2">    {/**why though ? */}
                                {this.state.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <ButtonGroup>
                        <IconButton 
                        onClick={() => this.decreaseQntty}
                        color="secondary">
                            <FormatIndentDecrease />
                        </IconButton>
                        {
                            this.state.qntty >= 1 ? 
                            (
                                <Button>
                                    {this.state.qntty}
                                </Button>
                            ) : (
                                <Button>
                                    Add
                                </Button>
                            )
                        }
                            <IconButton 
                            onClick={() => this.increaseQntty /**Used arrow function since we need to bind it */}
                            color="secondary">
                                <PlusOne />
                            </IconButton>
                        </ButtonGroup>
                    </CardActions>
                </Card>
            </>
        )
    }
}

export default SabjiBox;
