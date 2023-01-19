import { kakaoInit } from "../components/kakaoInit";
import Router from 'next/router'

export default function Login() {
    const kakaoLogin = async() => {
        const kakao = kakaoInit();
        kakao.Auth.login({
            success: () => {
                kakao.API.request({
                    url: '/v2/user/me',
                    success: (res) => {
                        console.log(res);
                        Router.push('/kakao')
                    },
                    fail: (error) => {
                        console.log(error);
                    }
                })
            },
            fail: (error) => {
                console.log(error)
            }
        })
    }

    return <>
        <button onClick={kakaoLogin}>kakao</button>
    </>
}