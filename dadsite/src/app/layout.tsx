/* eslint-disable react/jsx-no-comment-textnodes */


import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenuPage from './components/hamburger'


const work = Work_Sans({
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Pilot Medical Exams",
  description: "Pilot Medical Exams, PLLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={work.className}>
      <body className="bg-[url('/Background.png')] bg-fixed bg-cover bg-no-repeat bg-top">
        
        <div className="flex justify-center font-semibold w-[100vw] mt-0 mb-10 pb-10">
          <div className="flex mt-[8vh] w-full lg:max-w-[1140px] items-center justify-center lg:justify-between font-calibri ">
            <h1 className="flex text-2xl lg:justify-start pb-4 pt-4 text-white max-lg:hidden bg-gray-700/80 px-4 rounded-2xl shadow-2xl border-gray-400 border-2">
              PILOT MEDICAL EXAMS, PLLC
            </h1>
            <div className="flex text-md justify-end pb-4 pt-4 text-white max-lg:hidden bg-gray-700/80 px-4 rounded-2xl shadow-2xl border-gray-400 border-2">
              <nav className="flex gap-10 uppercase text-white">
                <Link href="/"><h2>Home</h2></Link>
                <Link href="/about"><h2>About</h2></Link>
                <Link href="/services"><h2>Services</h2></Link>
                <Link href="/location"><h2>Location</h2></Link>
                <Link href="/contact"><h2>Contact</h2></Link>
              </nav>
            </div>
            <div className="flex pb-6 pt-0 lg:hidden">
              <HamburgerMenuPage />
            </div>
          </div>               
        </div>
        <div>
          {children}
        </div>
        <div className="w-full h-auto lg:h-[20rem] mt-10 bg-[#5d7a8c] lg:grid lg:grid-cols-2 text-white justify-center ">
          
          <div className="flex text-center items-center justify-center text-xl p-10">
            <div className="justify-center">
              <h2 className="flex justify-center lg:justify-start font-semibold uppercase">Pilot Medical Exams, PLLC</h2>
              <h2 className="flex justify-center lg:justify-start font-bold pt-8">Steve Edmondson, DO</h2>
              <h2 className="flex justify-center lg:justify-start uppercase">FAA Aviation Medical Examiner</h2>
              <h2 className="flex justify-center lg:justify-start uppercase">Board Certified Family Practice</h2>
            </div>
          </div>

          <div className="flex w-full items-center justify-center py-10">
            <div className="w-full">
              <div className="flex justify-center">
                <p>To schedule an appointment, <br/> email tania.cook@amway.com</p>
                {/*<button className="text-2xl font-semibold uppercase bg-[#7EBA6E] p-3">Schedule Now </button>*/}
              </div>

              <div className="font-semibold uppercase mt-12">
                <h2 className="flex justify-center lg:justify-start ">GERALD R. FORD INTERNATIONAL AIRPORT - KGRR</h2>
                <h2 className="flex justify-center lg:justify-start ">AMWAY AVIATION HANGAR</h2>
                <h2 className="flex justify-center lg:justify-start ">5410 44TH STREET SE</h2>
                <h2 className="flex justify-center lg:justify-start ">GRAND RAPIDS, MI 49512</h2>
                
              </div>
              
            </div>
          </div>

        </div>

      </body>
    </html>
  );
}
