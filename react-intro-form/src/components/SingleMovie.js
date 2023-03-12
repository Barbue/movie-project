import { useParams } from "react-router-dom";
import React from "react";

//TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
    return (
        <thead>
              <tr>
                <th>Title</th>
                <th>Actors</th>
                <th>Plot</th>
                <th>Genre</th>
                <th>IMDB Rating</th>
                <th>Director</th>
                <th>Year</th>
                <th>Date Added</th>
              </tr>
            </thead>
    );
}

//TABLE BODY SIMPLE COMPONENT 
const TableBody = (props) => {

  


    const params = useParams();
    

    const foundMovie = props.data.find((movie) => {
          return movie.title === params.title;
    })

    return (
        <tr key={1}>
          <td>{foundMovie.title}</td>
          <td>{foundMovie.actors}</td>
          <td>{foundMovie.plot}</td>
          <td>{foundMovie.genre}</td>
          <td>{foundMovie.imdbRating}</td>
          <td>{foundMovie.director}</td>
          <td>{foundMovie.year}</td>
          <td>{foundMovie.dateAdded}</td>
        
         
        </tr>
      )
    }
  
 

  const SingleMovie = (props) => {

   const { movies } = props


    

    return (
        <div>
          <TableHeader/>
          <TableBody data={movies} />

        </div>
    )
};
   

export default SingleMovie