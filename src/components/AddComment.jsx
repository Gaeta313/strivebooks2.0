import { Component, useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

const AddComment = (props) =>{
 /*  state = {
    commento: {
      comment: "",
      rate: 1,
      elementId: this.props.bookId,
    },
  }; */

  const [commento, setCommento] = useState({
    comment: "",
    rate: 1,
    elementId: props.bookId,
  })

  /* componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      this.setState({
        commento: {
          ...this.state.commento,
          elementId: this.props.bookId,
        },
      });
    }
  } */

  useEffect(() => {
    setCommento({
      ...commento,
      elementId: props.bookId,
    })
  },[props.bookId])

 const submit = async (e) => {
    e.preventDefault();
    console.log(commento);
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "POST",
        body: JSON.stringify(commento),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGViZGVkZDY3ODAwMTUwN2Q3MzUiLCJpYXQiOjE2NjIwMjk1MDEsImV4cCI6MTY2MzIzOTEwMX0.SM504i6mIQGhZLYsrRUxc6VHfvlIVuIZAxUaZ1XFEHM",
        },
      }
    );

    if (response.ok) {
      props.setAggiornamento(Math.random());
      /* this.setState({
        commento: {
          comment: "",
          rate: 1,
          elementId: this.props.bookId,
        },
      }); */
      setCommento(
        {
          comment: "",
          rate: 1,
          elementId: props.bookId,
        }
      );
      console.log("success");
    }
  };

    return (
      <Container>
        <Form onSubmit={submit} className="text-left">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Commento :</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Scrivi un commento"
              value={commento.comment}
              onChange={(e) => {
                /* this.setState({
                  commento: {
                    ...this.state.commento,
                    comment: e.target.value,
                  },
                }); */
                setCommento(
                  {
                    ...commento,
                    comment: e.target.value,
                  }
                );
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control
              as="select"
              value={commento.rate}
              onChange={(e) => {
               /*  this.setState({
                  commento: {
                    ...this.state.commento,
                    rate: e.target.value,
                  },
                }); */
                setCommento(
                  {
                    ...commento,
                    rate: e.target.value,
                  }
                );
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Container>
    );

}

export default AddComment;
