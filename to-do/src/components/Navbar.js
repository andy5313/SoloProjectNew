import Nav from 'react-bootstrap/Nav';

const Navbar = () => {

    return (
        <div>
            <h1 style={{ textAlign: 'center'}}>My Recommended Lists</h1>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/books">Books</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/movies">Movies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/games">Music</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/events">Events</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    

        
    )

}

export default Navbar;
