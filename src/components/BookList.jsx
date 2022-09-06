import { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) =>  {
 
   /*  state = {
    ricerca: "",
    filtrato: this.props.books,
  }; */

  const [ricerca, setRicerca] = useState('');
  const [filtrato, setFiltrato] = useState(props.books);

  //la ricerca è keySensitive
  const filterBookList= () => {
     let filtrato = props.books.filter(book =>(
      book.title.search(ricerca) !== -1)
    );
    /* this.setState({
        ricerca: "",
        filtrato: filtrato
    }) */
    setRicerca('');
    setFiltrato(filtrato);
  }


 
    return (
      <Container fluid>
        <Form className="text-left">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ricerca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cerca Libro"
              value={ricerca}
              onChange={(e) => {
                //this.setState({ ricerca: e.target.value });
                setRicerca(e.target.value); //
              }}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={filterBookList}>
            Cerca
          </Button>
        </Form>

        <Row xs={1} md={3} className="g-4">
          {filtrato.map((libro, i) => (
            <Col key={libro.asin} className="g-4 my-2">
              <SingleBook selectedBookId={props.selectedBookId} setBookId={props.setBookId} book={libro} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  
}

export default BookList;
