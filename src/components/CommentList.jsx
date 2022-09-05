import { Component } from "react";
import { ListGroup} from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {




  render() {
    return <ListGroup>
      
        {
            this.props.commenti.map((commento)=>(
                 <SingleComment  key={commento._id} commento={commento} />
            ))
            
        }
       
    </ListGroup>;
  }
}

export default CommentList;
