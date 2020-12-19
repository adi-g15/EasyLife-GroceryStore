import {
    Typography,
    ButtonGroup,
    IconButton
} from "@material-ui/core";
import { MailRounded, Facebook, WhatsApp } from "@material-ui/icons";
import "../styles/footer.css";

export default function () {
    return (
        <footer className="footer_green">
            <Typography variat="h6" component="h5">
                Order groceries online, and we help ease your life a bit more
            </Typography>
            <hr />
            <Typography variant="h6" color="textSecondary">
                Help / Feedback
            </Typography>
            <ButtonGroup>
                <IconButton>
                    <MailRounded />
                </IconButton>
                <IconButton>
                    <Facebook />
                </IconButton>
                <IconButton>
                    <WhatsApp />
                </IconButton>
            </ButtonGroup>
        </footer>
    )
}