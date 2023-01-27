import type { NextPage } from "next"
import React, { useState } from "react"

const Home:NextPage = () =>{
  const [num, setNum] = useState(1);

  const onClickMinus = () => {
    if(num === 1) {
      setNum(1);
    }else {
      setNum(prev=>prev-1)
    }
  }
  const onClickPlus = () => {
    setNum(prev=>prev+1)
  }
  return (
    <div className="bg-slate-400 py-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl  mx-20">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1,2,3,4,5].map(i=> (
            <div key = {i} className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-50">
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c,i) => 
          <li className="bg-indigo-100 py-2 empty:bg-indigo-200" key = {i}>{c}</li>)}
        </ul>
        
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="flex justify-center">
          <button
          className="mt-5 bg-blue-500 text-white p-3
          text-center rounded-xl w-3/4 hover:bg-teal-800 active:bg-yellow-500 focus:bg-red-500"
        >
          Checkout
          </button>
        </div>
        
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl  mx-20 group">
        <div className="bg-blue-500 p-6 pb-14 flex justify-between">
          <span className="text-white text-2xl">Profile</span>
          <span>🛒</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-gray-300 rounded-full group-hover:bg-red-300" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$340</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-semibold">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl  mx-20 lg:col-span-2 xl:col-span-1">
        <div className="flex justify-between">
          <div className="text-3xl">
            <span className="font-semibold text-gray-500">←</span>
          </div>
          <div className="flex flex-row space-x-2">
            <span className="p-2 font-semibold">⭐ 4.9</span>
            <span className="p-2 shadow-xl rounded-lg">❤️</span>
          </div>
        </div>
        <div className="flex justify-center p-5">
          <img src = "favicon.ico"/>
        </div>
        <div>
          <span className="font-bold">Swoon Lounge</span>
          <div>
            <span className="text-gray-400 text-sm">
              chair
            </span>
            <div className="flex justify-between">
              
              <div className="flex flex-row space-x-5 py-3" >
                <button className="w-5 h-5 rounded-full bg-red-300 focus:ring-2 ring-offset-2 ring-red-300 transition"/>
                <button className="w-5 h-5 rounded-full bg-blue-300 focus:ring-2 ring-offset-2 ring-blue-300 transition"/>
                <button className="w-5 h-5 rounded-full bg-yellow-300 focus:ring-2 ring-offset-2 ring-yellow-300 transition"/>
              </div>
              <div className="flex items-center space-x-3 text-xl">
                  <div className="bg-blue-100 w-8 h-8 text-center rounded-xl text-blue-800" onClick={onClickMinus}>-</div>
                  <div className="font-semibold">{num}</div>
                  <div className="bg-blue-100 w-8 h-8 text-center rounded-xl text-blue-800" onClick={onClickPlus}>+</div>
                </div>
              </div>
          </div>
          <div className="py-1 flex justify-between items-center">
            <span className="text-xl font-semibold">${450 * num}</span>
            <button className="bg-blue-500 text-white p-2 w-1/2 text-center rounded-xl">Add to cart</button>
          </div>
        </div>
        
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl  mx-20">
        <form className="flex flex-col space-y-2">
          <input type="text" required placeholder="username" className="peer"/>
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">
            This input is invalid
          </span>
          <span className="hidden peer-valid:block peer-valid:text-teal-500">
            Awesome username
          </span>
          <input type="submit"/>
        </form>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl  mx-20">
        <details className="select-none open:bg-indigo-200 open:text-white">
          <summary>내가 제일 좋아하는 음식</summary>
            <p>국밥</p>
            <p>순두부</p>
        </details>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl  mx-20">
          <input type="file" className="file:bg-indigo-300 file:text-white file:border-indigo-300 file:rounded-md 
          file:hover:bg-white file:hover:text-indigo-300 file:hover:border-2 file:hover:border-indigo-300 transition-colors"/>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl  mx-20">
        <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
        Hello everyone!
      </p>
      </div>
    </div>
  )
}

export default Home;
