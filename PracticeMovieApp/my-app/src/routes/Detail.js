import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Detail.module.css";

function Detail(){
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        console.log(movie);
    }
    useEffect(()=>{
        getMovie();
    },[])
    console.log(movie)
    return (
        <div className={styles.container}>
            <div className={styles.movie}>
                <h1>{movie.title}</h1>
                <img src={movie.background_image} />
                <p>{movie.description_full}</p>
            </div>
        </div>
        
    )
}

export default Detail;