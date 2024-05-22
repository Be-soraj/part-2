import React from 'react';
import './App.css';
import search from './search-svgrepo-com (1).png';

function App() {
  return (
    <>
  <div className=' flex border p-4 bg-gray-400'>
     </div>
     <div className=' flex border gap-4 font-semibold text-white'>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-3'>html</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>css</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>javascript</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>sql</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>python</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>java</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>php</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>how&nbsp;to</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>w3.css</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>c</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>c++</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>c#</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>bootstrap</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>react</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>mysql</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>jquery</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>excel</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>xml</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>djngo</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>numpy</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>pandas</button>
      <button className=' uppercase transition-all ease-in-out delay-50 bg-transparent hover:bg-black p-2'>nodejs</button>
     </div>
     <div className=' h-screen flex flex-col  items-center justify-center'>
        <h1 className='font-bold text-7xl text-white'>Learn to Code</h1>
        <p className=' mt-7 text-yellow-200 font-extrabold text-2xl'>With the world's largest developer site </p>
        <div className='flex mt-7'>
        <input  className='border w-[24rem] placeholder:font-bold placeholder:text-slate-500 placeholder:opacity-50s pl-4 outline-none rounded-s-3xl border-gray-300'  type="text" placeholder='Search out tutorials,e.g.html'/>
        <button className=' border hover:bg-green-600 rounded-e-3xl bg-green-500 p-3 px-8'><img className='h-5' src={search} alt="" /></button>
        </div>
        <a className=' underline hover:text-yellow-200 mt-7 text-white font-extrabold text-2xl' href=" https://www.w3schools.com/where_to_start.asp">Not Sure Where To Begin?</a>
      </div>
    </>
  );
}

export default App;
