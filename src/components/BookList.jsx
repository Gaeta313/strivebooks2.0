import { Component } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
 
    state = {
    ricerca: "",
    filtrato: this.props.books,
  };

  //la ricerca è keySensitive
  filterBookList= () => {
    console.log(this.state);
     let filtrato = this.props.books.filter(book =>(
      book.title.search(this.state.ricerca) !== -1)
    );
    this.setState({
        ricerca: "",
        filtrato: filtrato
    })
  }


  render() {
    return (
      <Container fluid>
        <Form className="text-left">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ricerca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cerca Libro"
              value={this.state.ricerca}
              onChange={(e) => {
                this.setState({ ricerca: e.target.value });
              }}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={this.filterBookList}>
            Cerca
          </Button>
        </Form>

        <Row xs={1} md={3} className="g-4">
          {this.state.filtrato.map((libro, i) => (
            <Col key={libro.asin} className="g-4 my-2">
              <SingleBook selectedBookId={this.props.selectedBookId} setBookId={this.props.setBookId} book={libro} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
