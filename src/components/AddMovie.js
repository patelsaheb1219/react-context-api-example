import React, { useState, useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';


const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const updateName = e => {
    setName(e.target.value);
  }

  const updatePrice = e => {
    setPrice(e.target.value);
  }

  const addMovie = e => {
    e.preventDefault();
    setMovies(prerMovies => [...prerMovies, { name, price, id: prerMovies.lenth + 1}]);
  }
  return (
    <form onSubmit={addMovie}>
      <input type={"text"} name={"name"} value={name} onChange={updateName} />
      <input type={"text"} name={"price"} value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  )
}

export default AddMovie;