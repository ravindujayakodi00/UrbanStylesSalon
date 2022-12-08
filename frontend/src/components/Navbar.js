import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CollapsibleNavbar= () => {
  return (
    
    <div>
        <div>

        </div>
        <div className='navbar-navbar'>
        <Navbar collapseOnSelect variant='light'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-item left-navs">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link className='services' href="/">Our Services</Nav.Link>
                </Nav>    
                <Navbar.Brand href="/"><img className='logo' src="https://i.ibb.co/QF2KXsW/logo.png" alt="fdf" /></Navbar.Brand>
                <Nav className="nav-item right-navs">    
                    <Nav.Link href="/">Contact</Nav.Link>
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/"><button className='btn btn-outline-dark'>Book Now</button></Nav.Link>
                </Nav>
               
                </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    </div>
  );
}

export default CollapsibleNavbar;