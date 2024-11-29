import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'

const MyNav = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="px-3 py-2 "
      style={{ backgroundColor: '#221f1f', overflow: 'hidden' }}
    >
      <Navbar.Brand href="#home">
        <img
          src={logo}
          style={{ width: '100px', height: '55px' }}
          alt="netflix logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" className="fw-bold">
            Home <span className="visually-hidden">(current)</span>
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold active">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold">
            My List
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#" className="fw-bold">
            <FontAwesomeIcon icon={faSearch} />
          </Nav.Link>
          <Nav.Link href="#">
            <div id="kids">KIDS</div>
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold">
            <FontAwesomeIcon icon={faBell} />
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold">
            <FontAwesomeIcon icon={faUser} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
