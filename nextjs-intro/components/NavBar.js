import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState, profileImgState } from "./atom";
import { kakaoInit } from "./kakaoInit";

export default function NavBar() {
  const [userImg, setUserImg] = useRecoilState(profileImgState);
  const login = useRecoilValue(loginState);

  if(login) {
    const kakao = kakaoInit();
    
    kakao.API.request({
      url: '/v1/api/talk/profile',
      success : (res) => {
          setUserImg(res.profileImageURL)
      },
      fail : (error) => {
          console.log(error)
      }
    })
  }
  const router = useRouter();

  return (
    <nav>
      <img className = "logoImg"src = "/next.svg"></img>
      <div className="loginWrap">
        {userImg === "" ?
        <Link href = "/login"><button>로그인하러가기</button></Link> :
        <Link href = "/kakao"><img className="profileImg" src = {userImg}/></Link>}
      </div>
      <div>
        <Link  href="/" legacyBehavior >
          <span className={router.pathname === "/" ? "active":""}>Home</span>
        </Link>
        <Link href="/about" legacyBehavior>
            <span className={router.pathname === "/about" ? "active":""} >About</span>
        </Link>
      </div>

      <style jsx>{`
      nav {
        font-size: 18px;
        font-weight: bold;
        margin: 0 auto;
        text-align: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      }
      .active {
        color: tomato;
      }
      .logoImg {
        margin: 20px 10px 10px 10px;
        max-width: 80px;
      }
      .profileImg {
        width:40px;
        height:40px;
        object-fit: cover;
        border-radius: 50px;
      }
      div {
        padding: 10px 20px;
      }
      span {
        margin: 20px;
      }
      .loginWrap {
        position: absolute;
        top:0;
        right:120px;
      }
      button {
        border:none;
        background:none;
        font-style: italic;
      }
      button:hover {
        text-decoration: underline;
        cursor:pointer;
      }
      `}</style>
    </nav>
  );
}