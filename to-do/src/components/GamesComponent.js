import { Component} from 'react';
import axios from 'axios';
import GameDetails from './GameDetails';
import Container from 'react-bootstrap/Container';

class GamesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            newGame: {
                name: '',
                description: '',
                author: '',
                photoURL: '',
            }
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/games')
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
        axios.get('http://localhost:5000/games')
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
        console.log(this.state.newGame);
        axios.post('http://localhost:5000/games/', this.state.newGame)
        .then(response => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
        this.setState({
            ...this.state,
            newGame: {
                name: '',
                description: '',
                author: '',
                photoURL: '',
            }
        })
    }

    handleDelete = (e) => {
        e.preventDefault();
        const objectID = e.target.id
        axios.delete(`http://localhost:5000/games/${objectID}`)
        .then(response => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);

        })
    }

    gamesList = () => {
        return this.state.array.map(currentGame => {
            return <GameDetails handleDelete={this.handleDelete} game={currentGame} id={currentGame._id} key={currentGame._id} />
        })
    }

    handleNameChange = (e) => {
        this.setState({
            newGame: {
                ...this.state.newGame,
                name: e.target.value
            }
        })
    }

    handleDescChange = (e) => {
        this.setState({
            newGame: {
                ...this.state.newGame,
                description: e.target.value
            }
        })
    }

    handleAuthorChange = (e) => {
        this.setState({
            newGame: {
                ...this.state.newGame,
                author: e.target.value
            }
        })
    }

    handlePhotoChange = (e) => {
        this.setState({
            newGame: {
                ...this.state.newGame,
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
                                <input type="text" value={this.state.newGame.name} onChange={this.handleNameChange} required className="form-control container-m"></input>
                                <label>Recommended: </label>
                                <input type="text" value={this.state.newGame.author} onChange={this.handleAuthorChange} required className="form-control container-m"></input>
                            </div>
                            <div className="form-group">
                                <label className='photo-text'>Photo: </label>
                                <input type="text" value={this.state.newGame.photoURL} onChange={this.handlePhotoChange} required className="form-control container-m"></input>
                            </div>
                            <div className="form-group">
                                <label>Description: </label>
                                <input type="text" value={this.state.newGame.description} onChange={this.handleDescChange} required className="form-control container-m"></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <input type="submit" className="btn btn-primary"></input>
                    
                        </div>
                    </div>
                </form>
    
                <div className="list-container">
                    {this.gamesList()}
                </div>
            </Container>
        )
    }
  
}

export default GamesComponent;