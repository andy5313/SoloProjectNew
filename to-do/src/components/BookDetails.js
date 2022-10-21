import React from 'react';
import Button from 'react-bootstrap/Button';


const BookDetails = (props) => {
    return (
        
        <div className="items">
            <h2>{props.book.name}</h2>
            <img src={props.book.photoURL} />
            <p className="description-text">{props.book.description}</p>
            <p><span className="rec-text">Recommended By: </span>{props.book.author}</p>
            <div className='btnDiv'>
                <Button id={props.id} onClick={props.handleDelete} variant='danger'> X </Button>
                <Button id={props.id} onClick={props.handleDelete} variant='secondary'> Edit </Button> 
            </div>
        </div>
    )
}

export default BookDetails;