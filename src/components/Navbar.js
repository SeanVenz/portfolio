import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import resume from '../assets/img/resume.png'
import namelogo from'../assets/img/namelogo.png'

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src = {namelogo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>

                    <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>

                    <Nav.Link href="#projects" className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

                    {/* <Nav.Link href="#about-me" className = {activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('about-me')}>About Me</Nav.Link> */}
                    
                </Nav>
                <span className="navbar-text">
                <button disabled>Connect With me <ArrowRightCircle size = {25}/></button>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/sean-venz-quijano/" target="_blank"><img src = {navIcon1} alt = ""></img></a>
                        <a href="https://github.com/SeanVenz" target="_blank"><img src = {navIcon2} alt = ""></img></a>
                        <a href="https://tinyurl.com/quijanoseanvenz-resume" target="_blank"><img src = {resume} alt = ""></img></a>
                    </div>
                </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}