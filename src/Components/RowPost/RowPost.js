import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../Constants/Constants";
import './RowPost.css';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [UrlId, setUrlId] = useState('');
    const [dImg, setDimg] = useState({ state: true })
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        })
    }, [props])

    const opts = {
        height: '200px',
        width: '300px',
        cursor: 'pointer',
        marginRight: '10px',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            mute: 1,
            controls: 0
        },
    };

    const handleMovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length) {
                setUrlId({ movie: response.data.results[0], index: id })
                setDimg({ state: false, index: id })
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    const leaveMovie = (id) => {
        setUrlId(null);
        setDimg({ state: true, index: id })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="row_posters">
                {movies.map((movie) =>
                    <div id={movie.id} key={movie.id} onMouseEnter={() => handleMovie(movie.id)} onMouseLeave={() => leaveMovie(movie.id)}>
                        {UrlId?.movie && UrlId.index == movie.id ? (<YouTube key={movie.id} opts={opts} videoId={UrlId.movie.key} />) :
                            (<img className="poster" src={`${imageUrl + movie.backdrop_path}`} alt="poster" />)}

                    </div>
                )}

            </div>

        </div>
    )
}

export default RowPost