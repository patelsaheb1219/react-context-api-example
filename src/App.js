import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";

import { MovieProvider } from "./Context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
