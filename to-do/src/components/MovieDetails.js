import React from 'react';
import Button from 'react-bootstrap/Button';


const MovieDetails = (props) => {

    return (
        <div className="items">
            <h2>{props.movie.name}</h2>
            <img src={props.movie.photoURL} />
            <p>{props.movie.description}</p>
            <p>{props.movie.author}</p>
            <div className='btnDiv'>
                <Button id={props.id} onClick={props.handleDelete} variant='danger'> X </Button>
                <Button id={props.id} onClick={props.handleDelete} variant='secondary'> Edit </Button> 
            </div>
        </div>
    )
}

export default MovieDetails;