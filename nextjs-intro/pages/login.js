import { kakaoInit } from "../components/kakaoInit";
import Router from 'next/router'
import { useState } from "react";

export default function Login() {
    const [userImg, setUserImg] = useState("");

    const kakaoLogin = async() => {
        const kakao = kakaoInit();
        console.log(kakao.Auth.getAccessToken()); 
        kakao.Auth.login({
            success: () => {
                kakao.API.request({
                    url: '/v2/user/me', // 사용자 정보 가져오기
                    success: (res) => { 
                        // 로그인 성공할 경우 정보 확인 후 /kakao페이지로 push
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