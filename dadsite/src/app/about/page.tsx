import Image from "next/image"

export default function About() {
    return (
        <div className="bg-gray-700/80 flex flex-col font-semibold w-[90vw] mx-auto mt-0 mb-10 pb-10 rounded-2xl shadow-2xl border-gray-400 border-2">    
            <div className="flex justify-center w-[90vw] uppercase font-semibold font-calibri text-5xl pt-24 text-white">    
                <h1>About Us</h1>
            </div>
            <div className="text-white w-[90vw]">
                <div className="flex justify-center lg:float-end pt-10 pr-10 pl-10 pb-5">
                    <Image
                        src='/hangar2.png'
                        width={600}
                        height={300}
                        alt=""
                        className="rounded-2xl shadow-2xl border-gray-400 border-2"
                    ></Image>
                </div>
                <div className="flex justify-center md:block]">
                    <h1 className="font-bold md:pl-10 md:pt-10">Steve Edmondson, DO</h1>
                </div>
                <div className="flex justify-center md:block">
                    <h1 className="uppercase md:pl-10">FAA Medical Examiner</h1>
                </div>
            </div>
            <div className="text-white py-4 px-2 lg:px-10">
                <p className="my-6">
                    Welcome to Pilot Medical Exams, PLLC, your trusted destination for aviation medical services conveniently located right at Gerald R Ford Airport in Grand Rapids, MI.
                </p>

                <p className="my-6">
                    Founded and led by Dr. Steve Edmondson, a seasoned medical professional with over 30
                    years of experience in family practice and 20 years as an Aviation Medical Examiner (AME), we
                    specialize in providing comprehensive medical examinations tailored specifically for pilots.
                </p>

                <p className="my-6">
                    Dr. Edmondson's extensive background includes serving as the AME for Amway's pilots, ensuring their health and fitness for flight. Now retired from his family practice, Dr. Edmondson focuses solely on FAA medical exams and services for pilots, ensuring that each aviator meets the rigorous medical standards set by the Federal Aviation Administration (FAA).
                </p>

                <p className="my-6">
                    Our office is conveniently situated inside the Amway Aviation Hangar, making it easy for pilots to access essential medical care right at the airport.
                </p>

                <p className="my-6">
                    Trust Pilot Medical Exams, PLLC, for all your aviation medicine needs. Contact us today to schedule your appointment and take the next step towards safe and healthy flying.
                </p>
            </div>
        </div>
    )
}