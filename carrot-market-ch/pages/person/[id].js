import { useRouter } from "next/router";

export default function PersonDetail({data}) {
    const {query} = useRouter();
    console.log(query)
  return (
    <div className="grid mx-auto my-10 w-1/2 gap-2">

        <img src = {query.imgSrc}/>
        <span className="text-2xl font-bold py-2">{data.name}</span>
        <span>Networth : {query.netWorth}</span>
        <span>Country : {data.country}</span>
        <span>Industry : {data.industries.map(i=> <span>{i}</span>)}</span>
        <span>{data.bio}</span>
        <div className="mt-20">
            <span className="text-xl font-bold py-2">Financial Assets</span>
            <div className="grid grid-cols-4 gap-4 mt-4">
            {data.financialAssets?.map(f =>
            <div key={f.id} className="grid border p-2 rounded-md font-semibold"> 
                <span>Ticker: {f.ticker}</span>
                <span>Shares: {f.numberOfShares}</span>
                {f.exerciseOptionPrice ?` Exercise Price : $${f.exerciseOptionPrice}`:null}
            </div>)}    
            </div>
            
        </div>
    </div>
  );
}

export async function getServerSideProps({ query: { id } }) {
    const data = await (await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`)).json();
    return {
      props: { data },
    };
  }
