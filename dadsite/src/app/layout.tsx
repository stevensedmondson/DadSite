import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        
        <div className="flex font-semibold w-full mt-[4rem] lg:w-auto h-auto flex-col items-center">
          <div className="lg:flex w-[90vw] lg:max-w-[1140px] items-center justify-center lg:justify-between font-calibri">
            <h1 className="flex lg:w-[40vw] text-2xl justify-center lg:justify-start pb-6 pt-8 text-[#07668C]">
              PILOT MEDICAL EXAMS, PLLC
            </h1>
            <div className="flex justify-end pb-6 pt-8 max-lg:hidden">
              <nav className="flex gap-10 uppercase text-[#5C8750]">
                <Link href="/"><h1>Home</h1></Link>
                <Link href="/about"><h1>About</h1></Link>
                <Link href="/services"><h1>Services</h1></Link>
                <Link href="/location"><h1>Location</h1></Link>
                <Link href="/contact"><h1>Contact</h1></Link>
              </nav>
            </div>
            <div className="flex justify-center pb-6 pt-2 lg:hidden">
              <nav className="flex gap-10 uppercase text-[#5C8750]">
                <Link href="/"><h1>Home</h1></Link>
                <Link href="/about"><h1>About</h1></Link>
                <Link href="/services"><h1>Services</h1></Link>
                <Link href="/location"><h1>Location</h1></Link>
                <Link href="/contact"><h1>Contact</h1></Link>
              </nav>
            </div>
          </div>               
        </div>

        {children}

        <div className="w-full h-auto lg:h-[20rem] mt-20 bg-[#044159] lg:grid lg:grid-cols-2 text-white justify-center ">
          
          <div className="flex items-center justify-center text-xl p-10">
            <div className="justify-center">
              <h2 className="flex justify-center lg:justify-start font-semibold uppercase">Pilot Medical Exams, PLLC</h2>
              <h2 className="flex justify-center lg:justify-start font-bold pt-8">Steve Edmondson, DO</h2>
              <h2 className="flex justify-center lg:justify-start uppercase">FAA Medical Examiner</h2>
            </div>
          </div>

          <div className="flex items-center justify-center py-10">
            <div className="justify-center">
              <div className="flex justify-center">
                <button className="text-2xl font-semibold uppercase bg-[#7EBA6E] p-3">Schedule Now </button>
              </div>

              <div className="font-semibold uppercase mt-12">
                <h2 className="flex justify-center lg:justify-start ">GERALD FORD INTERNATIONAL AIRPORT</h2>
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
