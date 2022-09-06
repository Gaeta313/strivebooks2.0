import { Component, useState } from "react";
import { Card, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = (props)=> {
  /* state = {
    selected: false,
  }; */

  const [selected, setSelected] = useState(false);

    if (props.book.asin !== props.selectedBookId) {
      return (
        <Card
          className="h-100"
          onClick={() => {
            props.setBookId(props.book.asin);
          }}
        >
          <Card.Img width="100%" variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title>{props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Container>
           <Card
          border="danger"
          className="h-100"
          onClick={() => {
          }}
        >
          <Card.Img width="100%" variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title>{props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        </Container>
       
      );
    }
}

export default SingleBook;
