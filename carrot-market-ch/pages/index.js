
export default function Home() {
  return (
    <div className="w-screen bg-red-50 grid grid-cols-3 gap-10 p-20 px-64">
      <div className="bg-white px-5 py-10 relative ">
        <div className="mb-8">
          <span className="font-extrabold text-4xl">Weather</span>
        </div>
        <div className="space-y-6">
          <div className=" border-2 border-black rounded-md border-b-[6px] flex justify-between p-5 font-extrabold">
            <div className="grid">
              <span className="text-2xl ">Casius</span>
              <span className="text-sm">Mars,12AM</span>
            </div>
            <div className="flex items-center space-x-3 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cloud-drizzle" viewBox="0 0 16 16">
              <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"/>
              </svg>
              <span>85°</span>
            </div>
          </div>
          <div className="bg-amber-400 border-2 border-black rounded-md border-b-[6px] flex justify-between p-5 font-extrabold">
            <div className="grid">
              <span className="text-2xl ">Dlacria</span>
              <span className="text-sm">Mars,12AM</span>
            </div>
            <div className="flex items-center space-x-3 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cloud-drizzle" viewBox="0 0 16 16">
              <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"/>
              </svg>
              <span>85°</span>
            </div>
          </div> 
          <div className="bg-green-600 border-2 border-black rounded-md border-b-[6px] flex justify-between p-5 font-extrabold">
            <div className="grid">
              <span className="text-2xl ">New York</span>
              <span className="text-sm">USA,12AM</span>
            </div>
            <div className="flex items-center space-x-3 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </svg>
              <span>85°</span>
            </div>
          </div> 
          <div className="bg-red-500 border-2 border-black rounded-md border-b-[6px] flex justify-between p-5 font-extrabold text-white">
            <div className="grid">
              <span className="text-2xl ">Zomato</span>
              <span className="text-sm">India,12AM</span>
            </div>
            <div className="flex items-center space-x-3 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cloud-snow" viewBox="0 0 16 16">
              <path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973zM8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.25zM2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25z"/>
              </svg>
              <span>20°</span>
            </div>
          </div> 
        </div>
        <div className="absolute border-2 border-black rounded-full border-b-[6px] flex justify-center bottom-10 left-40">
          <span className="text-3xl font-bold px-[10px] pb-1">+</span>
        </div>
        
      </div>
      <div className="bg-white px-5 py-10">
        <div>
          <span className=" border-2 border-black rounded-full border-b-[6px] text-3xl px-3 pb-1">×</span>
        </div>
        <div className="pt-5 ">
          <div className="grid justify-items-center gap-2">
            <span className="font-bold">SIMPLE TAG</span>
            <span className="font-extrabold text-3xl text-center">Work with best Designers</span>
          </div>
          <div className="pt-7 grid grid-cols-2 gap-4">
            <div className="border-2 border-black border-b-[6px] bg-amber-400 rounded-lg h-44 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-image text-white" viewBox="0 0 16 16">
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
            </div>
            <div className="border-2 border-black border-b-[6px] bg-green-600 rounded-lg h-44 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-image text-white" viewBox="0 0 16 16">
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
            </div>
            <div className="border-2 border-black border-b-[6px] bg-pink-400 rounded-lg h-44 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-image text-white" viewBox="0 0 16 16">
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
            </div>
            <div className="border-2 border-black border-b-[6px] bg-red-500 rounded-lg h-44 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-image text-white" viewBox="0 0 16 16">
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-blue-700 py-3 mt-10 rounded-lg">
          <span className="text-white font-bold">Let&apos; get it done</span>
        </div>
      </div>
      <div className="bg-amber-400 px-5 py-10">
        <div className="relative ">
          <div className="absolute bg-white  border-2 border-black rounded-full border-b-[6px] p-2 px-[10px] -top-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </div>
          <div className=" text-center">
            <span className="text-3xl font-bold">Friends</span>
          </div>
          <div></div>
        </div>
        <div className="mt-12">
          <div className="relative">
            <input placeholder="Search with love ..." className="p-2 w-full rounded-xl placeholder:text-black text-xl border-2 border-black border-b-[6px] focus:outline-none "/>
            <span className="absolute right-10 top-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute ">
             <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </span>
          </div>
          <div className="mt-5 grid gap-5">
            <div className="bg-white rounded-xl border-2 border-black flex p-1">
              <div >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>  
              </div>
              
              <div className="flex flex-1 justify-between items-center">
                <div className="grid">
                  <span className="font-bold">Bill Rizer</span>
                  <span className="text-sm">Planet Designer</span>
                </div>
                <div className="mr-3">
                  <span className="text-xs bg-amber-400 px-3  py-1 font-bold rounded-lg border-2 border-black border-b-4 hover:bg-black hover:text-white">Invite</span>
                </div>
                
              </div>
              
            </div>
            <div className="bg-white rounded-xl border-2 border-black flex p-1">
              <div >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>  
              </div>
              
              <div className="flex flex-1 justify-between items-center">
                <div className="grid">
                  <span className="font-bold">Genbei Yagy</span>
                  <span className="text-sm">Planet Designer</span>
                </div>
                <div className="mr-3">
                  <span className="text-xs bg-amber-400 px-3  py-1 font-bold rounded-lg border-2 border-black border-b-4 hover:bg-black hover:text-white">Invite</span>
                </div>
                
              </div>
              
            </div>
            <div className="bg-white rounded-xl border-2 border-black flex p-1">
              <div >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>  
              </div>
              
              <div className="flex flex-1 justify-between items-center">
                <div className="grid">
                  <span className="font-bold">Lancy Neo</span>
                  <span className="text-sm">Rogue Corp</span>
                </div>
                <div className="mr-3">
                  <span className="text-xs bg-amber-400 px-3  py-1 font-bold rounded-lg border-2 border-black border-b-4 hover:bg-black hover:text-white">Invite</span>
                </div>
                
              </div>
              
            </div>
            <div className="bg-white rounded-xl border-2 border-black flex p-1">
              <div >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>  
              </div>
              
              <div className="flex flex-1 justify-between items-center">
                <div className="grid">
                  <span className="font-bold">Bill Rizer</span>
                  <span className="text-sm">Hard Cops</span>
                </div>
                <div className="mr-3">
                  <span className="text-xs bg-black  px-3 text-white py-1 font-bold rounded-lg border-2 border-black border-b-4 hover:bg-amber-400 hover:text-black">Invited</span>
                </div>
                
              </div>
              
            </div>
            <div className="bg-white rounded-xl border-2 border-black flex p-1">
              <div >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>  
              </div>
              
              <div className="flex flex-1 justify-between items-center">
                <div className="grid">
                  <span className="font-bold">Konami</span>
                  <span className="text-sm">Xenon Creator</span>
                </div>
                <div className="mr-3">
                  <span className="text-xs bg-amber-400 px-3  py-1 font-bold rounded-lg border-2 border-black border-b-4 hover:bg-black hover:text-white">Invite</span>
                </div>
                
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}


