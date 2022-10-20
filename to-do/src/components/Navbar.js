import Nav from 'react-bootstrap/Nav';
import useToken from '../useToken';
import { Link } from 'react-router-dom';

const Navbar = ({ removeToken }) => {
    const handleSignout = (e) => {
        removeToken(); 
    }

    return (
        <div>
            <div className="top-nav-div">
            <h1 style={{ textAlign: 'center'}}>My Recommended Lists</h1>
            <Link to="/login" className="top-nav-btn" >
                <button className={"btn btn-danger"} onClick={handleSignout}> Sign out </button>
            </Link>
            </div>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/books">Books</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/movies">Movies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/games">Games</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/music">Music</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    

        
    )

}

export default Navbar;
