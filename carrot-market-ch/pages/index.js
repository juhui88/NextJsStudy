import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, imgSrc, netWorth) => {
    router.push({
      pathname: `person/${id}`,
      query: {
        imgSrc : imgSrc,
        netWorth:netWorth
      }
    },`person/${id}`)
  }
  return (
    <div className="grid grid-cols-4 mx-auto my-10 w-3/4 justify-items-center gap-3">
      {results.map((b) => ( b===null || b === undefined ? null:
        /* <Link as = `person/[id]` href={{
          pathname: `person/[id]`,
          query:{
            id : b.id,
            imgSrc : b.squareImage,
            netWorth: Math.round(b.netWorth / 1000)
          }
          }}
          
          > </Link>*/
        <div onClick={()=>onClick(b.id, b.squareImage, Math.round(b.netWorth / 1000))} className="mb-10">
          <img  src={b.squareImage} />
          <span className="font-bold text-lg">{b.name}</span>
          <div className="text-sm">
            <span>{Math.round(b.netWorth / 1000)} Billions /</span>
            {b.industries.map(i=><span>{i}</span>)}
          </div>
        </div>  
        
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const results = await (
    await fetch(`https://billions-api.nomadcoders.workers.dev/`)
  ).json();
  return {
    props: {
      results
    }
  };
}
