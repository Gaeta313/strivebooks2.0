
import { ListGroup} from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) =>  {


    return <ListGroup>
      
        {
            props.commenti.map((commento)=>(
                 <SingleComment setAggiornamento={props.setAggiornamento}  key={commento._id} commento={commento} />
            ))
            
        }
       
    </ListGroup>;
}

export default CommentList;
