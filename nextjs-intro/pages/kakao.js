import Router from 'next/router';
import { kakaoInit } from '../components/kakaoInit';

export default function Kakao(){
    const kakaoLogout = () => {
        const kakao = kakaoInit();
        console.log(kakao.Auth.getAccessToken());

        kakao.API.request({
            url: '/v1/user/unlink',
            success: (res) => {
                console.log(res);
                Router.push('/');
            },
            fail : (error) => {
                console.log(error)
            }
        })
    }

    return (
        <>
            <button onClick={kakaoLogout}>logout</button>
        </>
    )
}