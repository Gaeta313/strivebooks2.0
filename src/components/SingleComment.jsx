
import { ListGroup } from "react-bootstrap";

const SingleComment = (props) => {
  const deleteF = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        props.commento._id,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGViZGVkZDY3ODAwMTUwN2Q3MzUiLCJpYXQiOjE2NjIwMjk1MDEsImV4cCI6MTY2MzIzOTEwMX0.SM504i6mIQGhZLYsrRUxc6VHfvlIVuIZAxUaZ1XFEHM",
        },
      }
    );
    props.setAggiornamento(props.commento._id);
  };

  return (
    <ListGroup.Item>
      <h6>{props.commento.author}</h6>
      <p>{props.commento.comment}</p>
      <p>Rate : {props.commento.rate}</p>
      <button className="btn btn-danger" onClick={deleteF}>
        X
      </button>
    </ListGroup.Item>
  );
};

export default SingleComment;
