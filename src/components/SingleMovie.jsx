import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleMovie extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Col className="text-center mb-3">
          <Card
            style={{ height: "100%" }}
            className="border-0 position-relative"
          >
            <Card.Img
              style={{ height: "100%" }}
              src={this.props.SingleMovie.Poster}
              className="img-fluid"
            />
            <Card.Body className="position-absolute bottom-0 movieDesc d-flex flex-column justify-content-center">
              <Card.Title>{this.props.SingleMovie.Title}</Card.Title>
              <Card.Text>{this.props.SingleMovie.Year}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleMovie;
