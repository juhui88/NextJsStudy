import { useRouter } from "next/router";

export default function Detail({params}){
    const [title,id] = params || [];
    return (
        <div>
            <h4>{title || "Loading..."}</h4>

        </div>
    )
    ;
}

export function getServerSideProps({ params: { params } }) {
    return {
        props: {params},
    };
}