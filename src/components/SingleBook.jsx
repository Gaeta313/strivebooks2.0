import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {

    state={
        selected: false
    }

  render() {
    if (!this.state.selected){
        return (
      <Card className="h-100" onClick={()=>{
        let nuovo = this.state.selected;
        nuovo = !nuovo;
        this.setState({selected:nuovo});
      }}>
        <Card.Img height="70%" variant="top" src={this.props.book.img} />
        <Card.Body >
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
    }
    else{
        return (
            <Card border="danger" className="h-100" onClick={()=>{
                let nuovo = this.state.selected;
                nuovo = !nuovo;
        this.setState({selected:nuovo});
            }}>
              <Card.Img height="70%" variant="top" src={this.props.book.img} />
              <Card.Body >
                <Card.Title>{this.props.book.title}</Card.Title>
              </Card.Body>
            </Card>
          );
    }
    
  }
}

export default SingleBook;
