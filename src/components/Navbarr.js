import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from "react-rating-stars-component";

function Navbarr({setText, setRate}) {
    return (
        <Navbar className='bgb' bg="dark" data-bs-theme="dark" style={{padding:'2px'}} >
            <Container fluid>
                <Navbar.Brand href="#">Movie app</Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                >
                    <div className='nav'><Nav.Link href="#action1">Movies</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link></div>

                </Nav>
                <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700" onChange={(new_rating)=>setRate(new_rating)} />,
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e)=> setText(e.target.value)}
                    />
                    <Button variant="outline-success" style={{ background: 'red', color: "white", border: "red" }}>Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Navbarr