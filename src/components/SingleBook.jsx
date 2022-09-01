import { Component } from "react";
import { Card, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    if (!this.state.selected) {
      return (
        <Card
          className="h-100"
          onClick={() => {
            let nuovo = this.state.selected;
            nuovo = !nuovo;
            this.setState({ selected: nuovo });
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
            let nuovo = this.state.selected;
            nuovo = !nuovo;
            this.setState({ selected: nuovo });
          }}
        >
          <Card.Img width="100%" variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        <CommentArea bookId={this.props.book.asin}/>
        </Container>
       
      );
    }
  }
}

export default SingleBook;
