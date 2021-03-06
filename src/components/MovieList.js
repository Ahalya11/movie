import React from 'react';


const MovieList= (props) => {
    
    return(
        <>
            {props.movies.map((movie,index) => (
           
           <div className='image-container d-flex justify-content-start m-3'>
           <img src={"https://image.tmdb.org/t/p/w500" + movie.poster} alt="movie"></img> 
           </div>
           
        ))}
        
       </> 
    );
};

export default MovieList;