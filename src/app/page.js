'use client'
import Image from "next/image";
import Typewriter from 'typewriter-effect';  

export default function Home() {
   return (
    <div className='min-h-screen bg-gray-900 flex justify-center items-center'> 
      <div className='text-stone-300 text-center text-4xl font-bold'> 
        <h1>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              delay: 100,
              strings: ["AFK-3's Frontend"]
            }}
          />
        </h1>
      </div>
    </div>
  );
}
