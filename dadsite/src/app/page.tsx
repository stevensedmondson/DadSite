
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-transparent w-full h-auto items-center">
      <div className="w-[90vw] flex justify-center">
        <Image
          src="/headshot1.png"
          alt=""
          width={1200}
          height={500}
          priority
          className="rounded-2xl shadow-2xl border-gray-400 border-2"
        />        
      </div>
      <div className="w-full text-white border-gray-400 border-2 bg-gray-700/80 rounded-2xl shadow-2xl mt-10 px-10">
        <h3 className="pt-[2rem] text-xl font-normal">
          Welcome to Pilot Medical Exams, PLLC, providing medical services to pilots requiring first, second, third class certificates. EKG’s conducted on site for first class pilots. We also conduct medical exams for students requiring their initial aviation medical certification.
        </h3>
        <h3 className="pt-[2rem] pb-[2rem] text-xl font-normal">
          Our office is conveniently located inside the Amway Aviation hangar facility at Gerald Ford International Airport in Grand Rapids, Michigan.
        </h3>
      </div>
      <div className="bg-[url(/hangar1.jpg)] bg-cover bg-no-repeat w-full rounded-lg border-gray-400 border-2 mt-10 p-[5rem] text-[#044159]">
        <div className="bg-[#D5E7F2]/90 p-5 rounded-2xl shadow-2xl w-full">
          
          <p className="flex text-center w-full pt-5 pb-5 font-medium">
          After over 30 years in family practice and 25+ years as an FAA Aviation Medical Examiner, Dr. Steve Edmondson is highly experienced in navigating pilots through the FAA's medical requirements for air safety.
          </p>
        </div>
      </div>
    </div>
      
    
  );
}    
      