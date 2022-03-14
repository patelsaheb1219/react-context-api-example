import React, { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: 'black',
      color: '#fff',
      paddingTop: 10,
      paddingBottom: 10
    }}>
      <h3>Kishan Patel</h3>
      <p>List of Movies : {movies.length}</p>
    </div>
  )
}

export default Nav