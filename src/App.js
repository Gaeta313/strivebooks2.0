import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import books from "./data/fantasy.json";
import { Row, Col } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./components/CommentArea";

class App extends Component {

  state={
    bookId:null,
    aggiornamento:undefined
  }

  setBookId=(bookId)=>{
    this.setState({bookId:bookId});
    console.log('stato cambiato')
  }

  setAggiornamento=(valore)=>{
    console.log('set aggiornamento')
    this.setState({aggiornamento:valore});
  }

  render() {
     return (
    <div className="App">
      <WarningSign text="Questo è un allert" />
      <MyBadge text="Questo è un badge" color="primary" />

      <Row>
        <Col xs={7}>
          <BookList selectedBookId={this.state.bookId} setBookId={this.setBookId} books={books} />
        </Col>
        <Col xs={5}>
          {
            this.state.bookId ?<CommentArea  bookId={this.state.bookId} setAggiornamento={this.setAggiornamento}/>: <h1>Seleziona un libro</h1>
          }
        </Col>
      </Row>
    </div>
  );
}
  }
 

export default App;
