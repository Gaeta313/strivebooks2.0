import {Badge} from "react-bootstrap";

const MyBadge = (props) =>(
    <p>{props.text}<Badge variant={props.color}>New</Badge></p>
)

export default MyBadge;