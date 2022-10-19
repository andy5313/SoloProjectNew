import { Component} from 'react';
import axios from 'axios';
import MovieDetails from './MovieDetails';
import Container from 'react-bootstrap/Container';

class MoviesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            newMovie: {
                name: '',
                description: '',
                author: '',
                photoURL: '',
            }
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/movies')
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
        axios.get('http://localhost:5000/movies')
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
        console.log(this.state.newMovie);
        axios.post('http://localhost:5000/movies/', this.state.newMovie)
        .then(response => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
        this.setState({
            ...this.state,
            newMovie: {
                name: '',
                description: '',
                author: '',
                photoURL: '',
            }
        })
    }

    handleDelete = (e) => {
        e.preventDefault()
        const objectID = e.target.id
        axios.delete(`http://localhost:5000/movies/${objectID}`)
        .then(response => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);

        })
    }

    moviesList = () => {
        return this.state.array.map(currentMovie => {
            return <MovieDetails handleDelete={this.handleDelete} movie={currentMovie} id={currentMovie._id} key={currentMovie._id} />
        })
    }

    handleNameChange = (e) => {
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                name: e.target.value
            }
        })
    }

    handleDescChange = (e) => {
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                description: e.target.value
            }
        })
    }

    handleAuthorChange = (e) => {
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                author: e.target.value
            }
        })
    }

    handlePhotoChange = (e) => {
        this.setState({
            newMovie: {
                ...this.state.newMovie,
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
                                <input type="text" value={this.state.newMovie.name} onChange={this.handleNameChange} required className="form-control container-m"></input>
                                <label>Recommended: </label>
                                <input type="text" value={this.state.newMovie.author} onChange={this.handleAuthorChange} required className="form-control container-m"></input>
                            </div>
                            <div className="form-group">
                                <label className='photo-text'>Photo: </label>
                                <input type="text" value={this.state.newMovie.photoURL} onChange={this.handlePhotoChange} className="form-control container-m"></input>
                            </div>
                            <div className="form-group">
                                <label>Description: </label>
                                <input type="text" value={this.state.newMovie.description} onChange={this.handleDescChange} required className="form-control container-m"></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <input type="submit" className="btn btn-primary"></input>
                    </div>
                    </div>
                </form>
    
                <div className="list-container">
                    {this.moviesList()}
                </div>
            </Container>
        )
    }
  
}

export default MoviesComponent;