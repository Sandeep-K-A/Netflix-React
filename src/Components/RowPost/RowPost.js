import React, { useEffect, useState } from 'react';
import axios from "../../axios";
import { imageUrl } from "../../Constants/Constants";
import './RowPost.css';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        })
    }, [props])

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="row_posters">
                {movies.map((movie) =>
                    <img className="poster" src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
                )}
            </div>
        </div>
    )
}

export default RowPost