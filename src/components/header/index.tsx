import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaPlay, FaStop } from "react-icons/fa";
import Logo from "../../assets/images/logo.png"

const Header = ({ handleRun, handleStop, language, setLanguage, isDisabled }: any) => {
  const handleLanguageChange = (event: any) => {
    // console.log(event?.target.value)
    setLanguage(event?.target.value)
  }

  return (
    <header>
      <Navbar expand="lg" className="bg-dark py-3">
        <Container fluid className='px-3'>
          <Navbar.Brand href="#" className='font-bold h3 m-0 text-white'>
            <div className="logo-wrap"><img src={Logo} width={150} /></div>
            Code Runner</Navbar.Brand>
          {/* <Nav.Link href="/" className="text-white ms-5"> Task 1</Nav.Link>
            <Nav.Link href="/course" className="text-white ms-3"> Go to task 2</Nav.Link>  */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex align-items-center gap-2">
              <Form.Select aria-label="Default select example" value={language} onChange={handleLanguageChange}>
                <option value="python">Python</option>
                <option value="HTML">HTML</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <option value="rust">Rust</option>
                <option value="php">PHP</option>
              </Form.Select>
              <Form.Select aria-label="Default select example">
                <option>Github Light</option>
                <option>Github Dark</option>
                <option>Vscode Light</option>
                <option>Vscode Dark</option>
                <option>Material</option>
                <option>OneDark</option>
              </Form.Select>
              <Button variant="success" disabled={isDisabled} onClick={() => handleRun()}> <FaPlay className="me-2" /> Run</Button>
              <Button variant="danger" disabled={!isDisabled} onClick={() => handleStop()}> <FaStop className="me-2" /> Stop</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
