import { Component } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    commenti: [],
    error: false,
    loading: true,
  };

  componentDidMount = async () => {
    this.getId();
    console.log('fatto')
  };

  componentDidUpdate(prevProps) {
    console.log('update');
    if(prevProps !== this.props){
      this.getId();
    }
  }

  getId = async () => {
    try {
      console.log('try')
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.bookId,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGViZGVkZDY3ODAwMTUwN2Q3MzUiLCJpYXQiOjE2NjIwMjk1MDEsImV4cCI6MTY2MzIzOTEwMX0.SM504i6mIQGhZLYsrRUxc6VHfvlIVuIZAxUaZ1XFEHM",
          },
        }
      );
      let data = await response.json();
      console.log(data);
      this.setState({ commenti: data,
    loading: false});
    } catch (e) {
        this.setState({ error: true}
        )
    }
  };

  render() {
    return (
      <Container>
        {this.state.loading && <Spinner className="my-3" animation="border" />}
        {!this.state.loading && !this.state.error && (
          <div>
            <CommentList commenti={this.state.commenti} />
            <AddComment bookId={this.props.bookId} />
          </div>
        )}
        {
            !this.state.loading && this.state.error && (
                <Alert variant="danger">Errore</Alert>
              )}
        
      </Container>
    );
  }
}

export default CommentArea;
