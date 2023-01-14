import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "da8f266ea3c69d7a4a7bb4928de2cc69";


export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `api/movies`
        )
      ).json();
      setMovies(results);
    })();
  }, []);


  return (
    <div className="wrap">
      <Seo title = "Home"/>
      {!movies && <h4>Loading...</h4>}
      {movies?.map(m => 
      <div key = {m.id}>
        <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}></img>
        <p>{m.original_title}</p>
      </div> )}
    <style jsx>{`
      .wrap {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        text-align: center;
        padding: 20px 10px;
      }
      img {
        width: 220px;
        border-radius:10px;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px;
        transition: transform 0.2s ease-in-out;
      }
      img:hover {
        transform: scale(1.04)
      }
      div {
        padding-bottom: 50px;
      }
      p {
        font-weight: bold;
        font-family: cursive;
        width: 200px;
        margin: 15px auto;
        text-align: center;
      }
    `}</style>
    </div>
  );
}