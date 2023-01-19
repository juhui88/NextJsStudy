import Layout from "../components/Layout";
import Head from 'next/head';
import "../styles/globals.css"

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Head>
                <script src = "https://developers.kakao.com/sdk/js/kakao.js"></script>
            </Head>
            <Component {...pageProps}/>
        </Layout>
    )
}