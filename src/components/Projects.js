import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import ListGroup from 'react-bootstrap/ListGroup';
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () => {

    const projects = [
        {
            title: "Interpreter",
            description: "An Interpreter made in C# with specifications given by our Professor",
            imgUrl: projImg1
        },
        {
            title: "Unit Testing",
            description: "A Small Web API with CI/CD Pipeline and Unit Testing",
            imgUrl: projImg2
        },
        {
            title: "Web API",
            description: "A Coffee Shop Web API made using .NET Framework",
            imgUrl: projImg3
        },
        {
            title: "Mean Annual Temperature Prediction",
            description: "An application used to predict annual temperature using Regression and Backpropagation Algorithm.",
            imgUrl: projImg3
        },
        {
          title: "Mentorrant",
          description: "An application used to predict annual temperature using Regression and Backpropagation Algorithm.",
          imgUrl: projImg3
        },
        {
            title: "Car Rental Service",
            description: "A Car Rental Service application made in Java with SQL as backend",
            imgUrl: projImg3
        }
    ];

    return (
        <section className="projects" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeInRightBig": ""}>
                    <h2>Projects</h2>
                    <p>Here are a few projects that I contributed to (By group and Individual) while I was in college that helped me hone my skills. You can find
                      them all on Github.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Project Name</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Description</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                          <Nav.Link eventKey="third">Images</Nav.Link>
                        </Nav.Item> */}
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project) => {
                                return (
                                  <ListGroup as="li" className="projects-list">
                                      <h3>{project.title}</h3>
                                  </ListGroup>
                                    
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                          {
                              projects.map((project) => {
                                return (
                                  <ListGroup as="li" className="projects-list">
                                      <p>{project.description}</p>
                                  </ListGroup>
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p></p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          {/* <img className="background-image-right" src={colorSharp2} alt = "sharp"></img> */}
        </section>
      )
}