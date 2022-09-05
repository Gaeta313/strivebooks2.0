import { Component } from "react";
import { Card, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    if (this.props.book.asin !== this.props.selectedBookId) {
      return (
        <Card
          className="h-100"
          onClick={() => {
            this.props.setBookId(this.props.book.asin);
          }}
        >
          <Card.Img width="100%" variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
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
          <Card.Img width="100%" variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
       {/*  <CommentArea bookId={this.props.book.asin}/> */}
        </Container>
       
      );
    }
  }
}

export default SingleBook;
