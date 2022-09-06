import { useEffect, useState } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentArea = (props) =>  {
  /* state = {
    commenti: [],
    error: false,
    loading: true,
  }; */

  const [commenti, setCommenti] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  /* componentDidMount = async () => {
    this.getId();
    console.log('fatto')
  }; */

  useEffect(() => {
    getId();
  },[])

  /* componentDidUpdate(prevProps) {
    console.log('update');
    if(prevProps !== this.props){
      this.getId();
    }
  } */

  useEffect(() => {
   getId();
    console.log('componentDidUpdate');
  },[props])

   const getId = async () => {
    try {
      console.log('try')
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.bookId,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGViZGVkZDY3ODAwMTUwN2Q3MzUiLCJpYXQiOjE2NjIwMjk1MDEsImV4cCI6MTY2MzIzOTEwMX0.SM504i6mIQGhZLYsrRUxc6VHfvlIVuIZAxUaZ1XFEHM",
          },
        }
      );
      let data = await response.json();
      /* this.setState({ commenti: data,
    loading: false}); */
    setCommenti(data);
    setLoading(false);
    } catch (e) {
        /* this.setState({ error: true} )*/
        setError(true);
       
    }
  };

    return (
      <Container>
        {loading && <Spinner className="my-3" animation="border" />}
        {!loading && !error && (
          <div>
            <CommentList commenti={commenti} setAggiornamento={props.setAggiornamento} />
            <AddComment bookId={props.bookId} setAggiornamento={props.setAggiornamento} />
          </div>
        )}
        {
            !loading && error && (
                <Alert variant="danger">Errore</Alert>
              )}
        
      </Container>
    );
}

export default CommentArea;
