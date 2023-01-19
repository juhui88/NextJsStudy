import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail({data}){
    return (
        <div className="wrap">
            <div className="title">{data.original_title || "Loading..."}</div>
            <div className="infoWrap">
                <div className="img">
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}></img>
                </div>
                <div className="info">
                    
                    <p className="country">
                        <span className="spec">country</span> 
                        <div>{data.production_countries.map(pc=> <span>{pc.iso_3166_1}</span>)}</div>
                    </p>
                    <p>
                        <span className="spec">runtime</span> 
                        <span>{data.runtime}m</span>
                    </p>
                    <p>
                        <span className="spec">release date</span> 
                        <span>{data.release_date}</span> 
                    </p>
                    <p>
                        <span className="spec">genre </span> 
                        <div>{data.genres.map(g => <span className="genre">{g.name}</span>)}</div>
                    </p>
                </div>
            </div>
                
            <div className="overview">
                <span>
                    {data.overview}
                </span>
                
            </div>
            <style jsx>{`
            .wrap {
                margin:10px;
            }
            .title {
                font-size:30px;
                font-weight: bold;
            }
            img {
                width: 200px;
                border-radius:10px;
                box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px;
            }
            .infoWrap {
                display: grid ;
                grid-template-columns: 200px auto;
                margin:10px;
            }
            .info {
                margin:10px;
                p:last-child {
                    
                }
            }
            p {
                display: grid ;
                grid-template-columns: 120px auto;
            }
            .spec {
                font-weight: bold;
                color: grey;
            }
            .genre {
                display: block ;
                margin-bottom: 10px;
            }
            .overview {
                margin: 20px 30px;
                display: block ;

            }
            `}</style>
        </div>
    )
    ;
}
export async function getServerSideProps({ params: { params } }) {
    const data = await (await fetch(`https://next-movie-silk-five.vercel.app/api/movies/${params[1]}`)).json();
    return {
      props: { data },
    };
  }