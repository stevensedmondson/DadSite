/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full lg:w-auto h-auto flex-col items-center">
      <div className="max-w-[90vw]">
        <Image
          src="/headshot1.jpg"
          alt=""
          width={1140}
          height={500}
          priority
        />        
      </div>
      <div className="max-w-[90vw]">
        <h3 className="pt-[5rem] text-xl font-normal">
          Welcome to Pilot Medical Exams, PLLC, your trusted destination for aviation medical services conveniently located right at Gerald R Ford Airport in Grand Rapids, MI.
        </h3>
        <h3 className="pt-[2rem] text-xl font-normal">
          We offer a range of services including AME medical exams, EKG screenings, and assistance with Special Issuance  cases. Our office is conveniently situated inside the Amway Aviation Hangar, making it easy for pilots to access essential medical care right at the airport.
        </h3>
      </div>
      <div className="bg-[url(/hangar1.jpg)] bg-cover bg-no-repeat w-full mt-10 p-[5rem] text-[#044159]">
        <div className="bg-[#D5E7F2]/90 p-5 rounded-2xl shadow-2xl mx-[20vw]">
          <h1 className="flex justify-center uppercase text-4xl pt-5">Testimonials</h1>
          <p className="flex text-center pt-10 pb-5 font-medium">
              Dr. Edmondson is a consummate professional whose expertise and dedication ensure pilots' safety. As a pilot, I have experienced his exceptional care firsthand. His knowledge and genuine concern create a comfortable atmosphere during appointments. Thank you, Dr. Edmondson, for your unwavering commitment to our safety and well-being.
          </p>
        </div>
      </div>
    </div>
      
    
  );
}    
      