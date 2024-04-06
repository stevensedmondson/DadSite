import Image from "next/image"



export default function Services() {
    return (
        <div className="">    
            <div>    
                <div className="flex font-semibold w-full lg:w-auto h-auto flex-col items-center">
                    <div className="max-w-[90vw]">
                        <Image 
                            src="/stock2.jpeg"
                            width={1140}
                            height={500}
                            alt=""
                            className="object-cover lg:w-[75vw] lg:h-[25vw] rounded-2xl border-2 border-white"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center uppercase font-semibold font-calibri text-5xl pt-24 text-white">Our Services</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-start text-center justify-items-center lg:justify-center w-full pt-10">    
                <div className="lg:mx-6 lg:max-w-[25vw] w-[90vw] h-auto py-4 pt-12">
                    <Image 
                        src="/Web4.jpg"
                        width={1000}
                        height={600}
                        alt=""
                        className="object-cover lg:w-[25vw] lg:h-[25vw] rounded-2xl border-2 border-white"                        
                    />
                    <h1 className="flex justify-center text-white pt-10 text-3xl">
                        FAA Medical Exams
                    </h1>
                    <p className="text-white pt-5">
                        Offering First, Second, & Third Class Medicals, as well as initial exams for Student Pilot Medical Certificates.
                    </p>
                </div>
                <div className="lg:mx-6 lg:max-w-[25vw] w-[90vw] h-auto py-4 pt-12">
                    <Image 
                        src="/ekg.jpg"
                        width={1000}
                        height={600}
                        alt=""
                        className="object-cover lg:w-[25vw] lg:h-[25vw] rounded-2xl border-2 border-white"
                    />
                        <h1 className="flex justify-center text-white text-3xl pt-10">
                            EKG
                        </h1>
                        <p className="pt-2 text-white">
                            FAA-approved EKG - On-site for your convenience.
                        </p>
                </div>
                <div className="lg:mx-6 lg:max-w-[25vw] w-[90vw] h-auto py-4 pt-12">
                    <Image 
                        src="/stock3.jpeg"
                        width={1000}
                        height={600}
                        alt=""
                        className="object-cover lg:w-[25vw] lg:h-[25vw] rounded-2xl border-2 border-white"
                    />
                    <h1 className="flex justify-center text-white pt-10 text-3xl">
                        Complex Medical Issues
                    </h1>
                    <p className="text-white pt-2">
                        We act as your liaison with the FAA to ensure efficiency with complex medical issues or special issuance circumstances.
                    </p>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 mx-10 gap-10">
                <div className="mx-[3vw] lg:mx-0 mt-8">
                    <div className="bg-gray-800/80 mx-10 lg:mx-0 py-5 rounded-3xl border-white border-2 h-[24rem]">
                        <h1 className="flex justify-center text-white pt-5 text-3xl">
                            Exam Details
                        </h1>
                        <p className="flex justify-center text-center text-white mx-8 pt-5">
                        Prior to each aviation medical examination, pilots must first complete the online FAA MedXpress form (FAA 8500-8), link below. Upon completion, you will be assigned a confirmation number which must be presented upon arrival for your aviation medical exam appointment.
                        </p>
                        <div className="flex justify-center pt-10 text-white text-xl p-5">
                            <a 
                                href='https://medxpress.faa.gov/MedXpress/Login.aspx' 
                                target='_blank'
                                className="bg-[#5C8750] p-5 rounded-3xl border-2 border-white"
                            >         
                            FAA MedExpress
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mx-[3vw] lg:mx-0 mt-8">
                    <div className="bg-gray-800/80 mx-10 lg:mx-0 py-5 rounded-3xl border-white border-2 h-[24rem]">
                        <h2 className="flex justify-center text-white pt-5 text-3xl">
                            Pricing Schedule
                        </h2>
                        <p className="flex justify-center text-center text-white mx-5 pt-10">
                            1st Class Exam - $150 <br/> 1st Class Exam incl. EKG - $200 <br/> 2nd/3rd Class Exams - $150
                        </p>
                        <p className="flex justify-center text-center text-white mx-5 pt-10">
                            We gladly accept Cash, Check, or Credit Card. <br/> Please make checks payable to: Pilot Medical Exams
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}