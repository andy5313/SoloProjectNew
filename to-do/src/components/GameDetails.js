import React from 'react';
import Button from 'react-bootstrap/Button';

const GameDetails = (props) => {
    return (
        
        <div className="items">
            <h2>{props.game.name}</h2>
            <img src={props.game.photoURL} />
            <p>{props.game.description}</p>
            <p>{props.game.author}</p>
            <div className='btnDiv'>
                <Button id={props.id} onClick={props.handleDelete} variant='danger'> X </Button>
                <Button id={props.id} onClick={props.handleDelete} variant='secondary'> Edit </Button> 
            </div>
        </div>
    )
}

export default GameDetails;