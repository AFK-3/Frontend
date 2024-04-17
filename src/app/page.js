'use client'
import Image from "next/image";
import Typewriter from 'typewriter-effect';  

export default function Home() {
   return (
    <div className='min-h-screen bg-black flex justify-center items-center'> 
      <div className='text-white text-center text-4xl font-bold'> 
        <h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 80,
              strings: ["AFK-3's Frontend"]
            }}
          />
        </h1>
      </div>
    </div>
  );
}
