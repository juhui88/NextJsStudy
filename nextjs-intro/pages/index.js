import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";


export default function Home({results}) {
  const router = useRouter();
  return (
    <div className="wrap">
      <Seo title = "Home"/>
      {results?.map(m => 
      <Link href = {`/movies/${m.original_title}/${m.id}`} key = {m.id}>
        <div className="movie" key = {m.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}></img>
          <p>{m.original_title}</p>
        </div> 
      </Link>
      )}
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
      .movie {
        padding-bottom: 50px;
        cursor: pointer;
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

export async function getServerSideProps() {
  const { results } = await ( await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results, 
    }
  }
}