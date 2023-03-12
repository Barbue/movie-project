import {Outlet, useNavigate} from "react-router-dom";

const MoviePage = (props) => {

    // const[movies] = useOutletContext();
    const navigate = useNavigate();

    const { movies } = props;



    return(

        <div className="singlemovie">

        <h1>Single Movie</h1>

        <select onChange={(e) => {
            navigate(`/movie/${e.target.value}`)


        }}>
            <option></option>
            {movies.map((movie) => {
                return (<option value={movie.title}>{movie.title}</option>)
        })}
            </select>
            <Outlet  />

        </div>

    )
}


export default MoviePage