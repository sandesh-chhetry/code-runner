import React from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaPlay, FaStop } from "react-icons/fa";
import Logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-dark py-3">
        <Container fluid className='px-3'>
          <Navbar.Brand href="#" className='font-bold h3 m-0 text-white'>
            <div className="logo-wrap"><img src={Logo} width={150} /></div>
            Code Runner</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex align-items-center gap-2">
              <Form.Select aria-label="Default select example">
                <option>Python</option>
                <option value="1">HTML</option>
                <option value="2">JavaScript</option>
                <option value="3">Java</option>
                <option value="3">C++</option>
                <option value="3">Rust</option>
                <option value="3">PHP</option>
              </Form.Select>
              <Form.Select aria-label="Default select example">
                <option>Github Light</option>
                <option>Github Dark</option>
                <option>Vscode Light</option>
                <option>Vscode Dark</option>
                <option>Material</option>
                <option>OneDark</option>
              </Form.Select>
              <Button variant="success"> <FaPlay className="me-2" /> Run</Button>
              <Button variant="danger"> <FaStop className="me-2" /> Stop</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header