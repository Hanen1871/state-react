import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Addmovie({movies, setmovies}) {
  console.log(movies)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setNewmovie] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: ""
  })
  const handleAdd= ()=>{
    setmovies([...movies, newmovie])
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ background: "red", color: "white", border: "red", marginTop: "50px" }}>
        +
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setNewmovie({...newmovie, name:e.target.value})}/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie image</Form.Label>
              <Form.Control type="text" placeholder="Enter movie image"  onChange={(e)=>setNewmovie({...newmovie,posterurl :e.target.value})} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie description</Form.Label>
              <Form.Control type="text" placeholder="Enter movie description"  onChange={(e)=>setNewmovie({...newmovie,description :e.target.value})}/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie rating</Form.Label>
              <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setNewmovie({...newmovie,rating :e.target.value})} />

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose} style={{ background: "bleu", color: "white", border: "bleu", marginTop: "50px" }}>
            Close</Button>
          <Button onClick={()=>{handleAdd(); handleClose()}} variant="primary" style={{ background: "red", color: "white", border: "red", marginTop: "50px" }}>add</Button>
        </Modal.Footer>
      </Modal>
    </>)
}

export default Addmovie