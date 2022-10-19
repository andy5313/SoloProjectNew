import { BrowserRouter as Router, Route, Routes}  from "react-router-dom";
import BooksComponent from "./components/BooksComponent";
import MoviesComponent from "./components/MoviesComponent";
import Navbar from "./components/Navbar";
//import InterestList from "./components/interestList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/books" exact element={<BooksComponent />} />
          <Route path="/movies" exact element={<MoviesComponent />} />
          
      </Routes>
      
    </Router>
  );
}

export default App;
