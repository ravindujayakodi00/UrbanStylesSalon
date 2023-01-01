import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
      <Navbar.Brand href="/">
          <img 
          src= 'https://i.ibb.co/BTqXdM4/logo.png'
          alt="Canvas Logo"
          width="100px"
          height="100px"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">
          <img 
          src= 'https://i.ibb.co/BTqXdM4/logo.png'
          alt="Canvas Logo"
          width="100px"
          height="100px"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='btn btn-outline-dark' href="/">Login</Nav.Link>
            <Nav.Link className='btn btn-outline-dark' href="/">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
      </Container>
    </Navbar>
  );
}

export default BasicExample;