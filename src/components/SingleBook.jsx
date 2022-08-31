import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Card className="h-100">
        <Card.Img height="70%" variant="top" src={this.props.book.img} />
        <Card.Body >
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
