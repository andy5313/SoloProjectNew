import React from 'react';
import Button from 'react-bootstrap/Button';


const MovieDetails = (props) => {

    return (
        <div className="items">
            <h2>{props.movie.name}</h2>
            <img src={props.movie.photoURL} />
            <p>{props.movie.description}</p>
            <p>{props.movie.author}</p>
            <Button id={props.id} onClick={props.handleDelete} variant='danger'>X</Button> 
        </div>
    )
}

export default MovieDetails;