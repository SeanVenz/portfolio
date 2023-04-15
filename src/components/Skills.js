import {Row, Col, Container} from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import twentyFive from "../assets/img/twenty-five.png"
import fifty from "../assets/img/fifty.png"
import seventyFive from "../assets/img/seventy-five.png"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Programming Languages</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src = {seventyFive} alt = "seventy-five"></img>
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src = {fifty} alt = "fifty"></img>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src = {fifty} alt = "fifty"></img>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src = {fifty} alt = "fifty"></img>
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src = {fifty} alt = "fifty"></img>
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src = {twentyFive} alt = "twenty-five"></img>
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <div></div>
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx skill2">
                        <p>Technologies</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src = {seventyFive} alt = "seventy-five"></img>
                                <h5>.NET</h5>
                            </div>
                            <div className="item">
                                <img src = {seventyFive} alt = "seventy-five"></img>
                                <h5>Git and Github</h5>
                            </div>
                            <div className="item">
                                <img src = {twentyFive} alt = "twenty-five"></img>
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src = {fifty} alt = "fifty"></img>
                                <h5>Docker</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src = {colorSharp}></img>
        </section>
    )
}