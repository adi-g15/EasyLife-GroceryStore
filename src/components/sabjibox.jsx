import React, { useState } from "react"
import { 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Typography, 
    Button, 
    ButtonGroup, 
    IconButton,
    makeStyles
} from "@material-ui/core";
import { PlusOne, FormatIndentDecrease } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    root: {

    }
}));

        /**
         * @notes @advices about state ->
         * 
         * 1. only place where you should directly assign to state is the constructor
         * 
         * 2. Treat state like if it's immutable
         * 
         * 3. If the new state depends upon the previous state, PASS A FUNCTION TO setState() instead of directly accessing state, since multiple setState() calls maybe batched asychronously, in which case we may be accessing a newer state value, to prevent this, use the funciton, seince it receives the prevuious state
         * 
         * 4. State updates are merged (ie. the objects passed to setState() are merged will previous state)
         * 
         */
export default function SabjiBox(props) {
    const name = props.data.name || "Unknown";
    const [visible, setVisible] = useState( props.data.visible || false );
    const price = props.data.visible || 0;
    const unit = props.data.unit || 'kg';
    const [qntty, setQntty] = useState( props.data.qntty || 0 );  // quantity

    const classes = useStyles();

    function increaseQntty(){
        setQntty( qntty + 1 );
    }

    function decreaseQntty(){
        setQntty( Math.max( qntty - 1, 0 ) );
    }

    return (
        <>
            <Card className={classes.root} >
                <CardActionArea >
                    <CardMedia 
                        component="img"
                        alt={`${name}`}
                        height="100"
                        image="/sabjis/temp.jpg"
                        title={name}
                    />

                    <CardContent>
                        <Typography variant="h6" component="h2">    {/**why though ? */}
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <ButtonGroup>
                    <IconButton 
                    onClick={() => decreaseQntty}
                    color="secondary">
                        <FormatIndentDecrease />
                    </IconButton>
                    {qntty >= 1 ? 
                        (<Button>
                            {qntty}
                        </Button>): 
                        (<Button>
                            Add
                        </Button>)
                    }
                        <IconButton 
                        onClick={() => increaseQntty /**Used arrow function since we need to bind it */}
                        color="secondary">
                            <PlusOne />
                        </IconButton>
                    </ButtonGroup>
                </CardActions>
            </Card>
        </>
    )
}
