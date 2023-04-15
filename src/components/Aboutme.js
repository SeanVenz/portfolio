import { Container, Row, Col } from "react-bootstrap";
import { Card, ListGroup } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const AboutMe = () => {

    return (
        <section className="about-me" id="about-me">
          <Container>
            <Row className="justify-content-between">
            <h2>More About Me</h2>
              <Col size={12}>
                <TrackVisibility>
                    {/* {({ isVisible }) => */}
                      {/* <div className={isVisible ? "animate__animated animate__rubberBand": ""}> */}
                        <Card bg="dark" text="white" className="mb-4 me-left justify-content-start">
                          <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <ListGroup variant="flush">
                              <ListGroup.Item>Sean Venz Quijano</ListGroup.Item>
                            </ListGroup> 
                          </Card.Body>
                        </Card>
                        {/* </div>} */}
                  </TrackVisibility>
                </Col>
                <Col size = {12}>
                <TrackVisibility>
                    {/* {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__rubberBand": ""}> */}
                        <Card bg="dark" text="white" className="mb-4 me">
                          <Card.Body>
                            <Card.Title>Email</Card.Title>
                            <ListGroup variant="flush">
                              <ListGroup.Item>quijano.seanvenz@gmail.com</ListGroup.Item>
                            </ListGroup>
                          </Card.Body>
                        </Card>
                        {/* </div>} */}
                  </TrackVisibility>
                </Col>
            </Row>
            <Row>
              <Col size = {12}>
                <TrackVisibility>
                    {/* {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__rubberBand": ""}> */}
                        <Card bg="dark" text="white" className="mb-4 me">
                          <Card.Body>
                            <Card.Title>Phone Number</Card.Title>
                            <ListGroup variant="flush">
                              <ListGroup.Item>+63915 019 3697</ListGroup.Item>
                            </ListGroup>
                          </Card.Body>
                        </Card>
                        {/* </div>} */}
                </TrackVisibility>
              </Col>
              <Col size = {12}>
                <TrackVisibility>
                    {/* {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__rubberBand": ""}> */}
                        <Card bg="dark" text="white" className="mb-4 me">
                          <Card.Body>
                            <Card.Title>Phone Number</Card.Title>
                            <ListGroup variant="flush">
                              <ListGroup.Item>+63915 019 3697</ListGroup.Item>
                            </ListGroup>
                          </Card.Body>
                        </Card>
                        {/* </div>} */}
                </TrackVisibility>
              </Col>
          </Row>
          </Container>
          
        </section>
      )
}