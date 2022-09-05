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
  }

  setBookId=(bookId)=>{
    this.setState({bookId:bookId});
    console.log('stato cambiato')
  }

  render() {
     return (
    <div className="App">
      <WarningSign text="Questo è un allert" />
      <MyBadge text="Questo è un badge" color="primary" />
      {
        //qui avremo due colonne, una che crea book list e l'altra che crea la comment area
      }

      <Row>
        <Col xs={7}>
          <BookList selectedBookId={this.state.bookId} setBookId={this.setBookId} books={books} />
        </Col>
        <Col xs={5}>
          {
            this.state.bookId ?<CommentArea bookId={this.state.bookId}/>: <h1>Seleziona un libro</h1>
          }
        </Col>
      </Row>
    </div>
  );
}
  }
 

export default App;
