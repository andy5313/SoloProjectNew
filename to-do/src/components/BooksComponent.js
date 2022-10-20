import { Component} from 'react';
import axios from 'axios';
import BookDetails from './BookDetails';
import Container from 'react-bootstrap/Container';

class BooksComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            newBook: {
                name: '',
                description: '',
                author: '',
                photoURL: '',
            }
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/books')
        .then(response => {
            this.setState({
                array: response.data
                
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    componentDidUpdate() {
        axios.get('http://localhost:5000/books')
        .then(response => {
            this.setState({
                array: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.newBook);
        axios.post('http://localhost:5000/books/', this.state.newBook)
        .then(response => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
        this.setState({
            ...this.state,
            newBook: {
                name: '',
                description: '',
                author: '',
                photoURL: '',
            }
        })
    }

    handleDelete = (e) => {
        e.preventDefault();
        console.log("dsda")
        const objectID = e.target.id
        axios.delete(`http://localhost:5000/books/${objectID}`)
        .then(response => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);

        })
    }

    booksList = () => {
        return this.state.array.map(currentBook => {
            return <BookDetails handleDelete={this.handleDelete} book={currentBook} id={currentBook._id} key={currentBook._id} />
        })
    }

    handleNameChange = (e) => {
        this.setState({
            newBook: {
                ...this.state.newBook,
                name: e.target.value
            }
        })
    }

    handleDescChange = (e) => {
        this.setState({
            newBook: {
                ...this.state.newBook,
                description: e.target.value
            }
        })
    }

    handleAuthorChange = (e) => {
        this.setState({
            newBook: {
                ...this.state.newBook,
                author: e.target.value
            }
        })
    }

    handlePhotoChange = (e) => {
        this.setState({
            newBook: {
                ...this.state.newBook,
                photoURL: e.target.value
            }
        })
    }

    render() {
        return (
            <Container expand="md">
                <form onSubmit={this.handleSubmit}>
                    <div className='form-container'>
                        <div>
                            <div className="form-group">
                                <label>Title: </label>
                                <input type="text" value={this.state.newBook.name} onChange={this.handleNameChange} required className="form-control container-m"></input>
                                <label>Recommended: </label>
                                <input type="text" value={this.state.newBook.author} onChange={this.handleAuthorChange} required className="form-control container-m"></input>
                            </div>
                            <div className="form-group">
                                <label className='photo-text'>Photo: </label>
                                <input type="text" value={this.state.newBook.photoURL} onChange={this.handlePhotoChange} required className="form-control container-m"></input>
                            </div>
                            <div className="form-group">
                                <label>Description: </label>
                                <input type="text" value={this.state.newBook.description} onChange={this.handleDescChange} required className="form-control container-m"></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <input type="submit" className="btn btn-primary"></input>
                    
                        </div>
                    </div>
                </form>
    
                <div className="list-container">
                    {this.booksList()}
                </div>
            </Container>
        )
    }
  
}

export default BooksComponent;