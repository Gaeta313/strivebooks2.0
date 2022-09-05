import { Component } from "react";
import {ListGroup} from "react-bootstrap"

class SingleComment extends Component{

    delete = async () => {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+ this.props.commento._id,{
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGViZGVkZDY3ODAwMTUwN2Q3MzUiLCJpYXQiOjE2NjIwMjk1MDEsImV4cCI6MTY2MzIzOTEwMX0.SM504i6mIQGhZLYsrRUxc6VHfvlIVuIZAxUaZ1XFEHM"
                }
        });
        this.props.setAggiornamento(this.props.commento._id);
    }

    render(){
        return(
            <ListGroup.Item> 
                <h6>{this.props.commento.author}</h6>
                <p>{this.props.commento.comment}</p>
                <p>Rate : {this.props.commento.rate}</p>
                <button className="btn btn-danger" onClick={this.delete} >X</button>
             </ListGroup.Item>
        )
    }
   
} 

export default SingleComment;