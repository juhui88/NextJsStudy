import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src = "/next.svg"></img>
      <div className="loginWrap">
        <Link href = "/login">
          <button>로그인하러가기</button>
        </Link>
        
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
      img {
        margin: 20px 10px 10px 10px;
        max-width: 80px;
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