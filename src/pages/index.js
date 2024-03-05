import RootLayout from "../app/layout"
import Image from 'next/image'


export default function Home() {
    return (
      <div className="h-[100vh]">  
        <div>
          <div className="grid lg:grid-cols-3 w-full h-[50vh] items-center text-black max-lg:hidden">
            <div className="flex justify-center items-center bg-white/50 border-black border-solid rounded-3xl shadow-xl shadow-gray-900 backdrop-blur-sm lg:w-[25vw] lg:h-[15vh] w-[70vw] h-[300px] justify-self-center">About Us</div>
            <div className="flex justify-center items-center bg-white/50 border-black border-solid rounded-3xl shadow-xl shadow-gray-900 backdrop-blur-sm lg:w-[25vw] lg:h-[15vh] w-[80vw] h-[300px] justify-self-center">Services</div>
            <div className="flex justify-center items-center bg-white/50 border-black border-solid rounded-3xl shadow-xl shadow-gray-900 backdrop-blur-sm lg:w-[25vw] lg:h-[15vh] w-[80vw] h-[300px] justify-self-center">Location</div>
          </div>
          <div className="flex justify-center">
            <Image className="flex  border-black border-solid rounded-3xl shadow-2xl lg:w-[40vw]"
              src="/wedding.jpg"
              width={400}
              height={500}
              alt=""
            />
          </div>
          <div className="grid lg:grid-cols-3 w-full h-[50vh] gap-10 mt-20 items-center text-black lg:hidden">
            <div className="flex justify-center items-center bg-white/50 border-black border-solid rounded-3xl shadow-xl shadow-gray-900 backdrop-blur-md lg:w-[20vw] lg:h-[8vh] w-[60vw] h-[200px] justify-self-center">About Us</div>
            <div className="flex justify-center items-center bg-white/50 border-black border-solid rounded-3xl shadow-xl shadow-gray-900 backdrop-blur-sm lg:w-[20vw] lg:h-[8vh] w-[60vw] h-[200px] justify-self-center">Services</div>
            <div className="flex justify-center items-center bg-white/50 border-black border-solid rounded-3xl shadow-xl shadow-gray-900 backdrop-blur-sm lg:w-[20vw] lg:h-[8vh] w-[60vw] h-[200px] justify-self-center">Location</div>
          </div>
        </div>
        
      </div>
    )
  }
  
  
  