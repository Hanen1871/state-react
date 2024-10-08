import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

function MovieCard({ movie }) {
    return (

        <Card style={{ width: '11rem', margin: '12px' }}>
            <Card.Img variant="top" src={movie.posterurl} style={{height:'100px'}} />
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <ReactStars
                    edit={false}
                    count={5}
                    value={movie.rating}
                    size={24}
                    activeColor="#ffd700" />,

                <Button variant="primary" style={{background:"red", border:"red"}}>Trailer</Button>
            </Card.Body>
        </Card>

    )
}

export default MovieCard