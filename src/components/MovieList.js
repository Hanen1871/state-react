import React from 'react'
import MovieCard from './MovieCard'
import Addmovie from './Addmovie'

function MovieList({movies, setmovies, text, rate}) {
  return (<div>
    <div style={{display:'flex', justifyContent:'center'
    }}><Addmovie movies={movies}  setmovies={setmovies}/>
    </div>
    <div className='containerr'>
        
        {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && (el.rating>=rate)).map((el)=><MovieCard movie={el}/>).reverse()}
    </div></div>
  )
}

export default MovieList