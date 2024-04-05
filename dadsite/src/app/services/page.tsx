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
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center uppercase font-semibold font-calibri text-4xl pt-12 text-white">Our Services</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-start text-center justify-items-center lg:justify-center w-full pt-10">    
                <div className="lg:mx-6 lg:max-w-[25vw] w-[90vw] h-auto py-4">
                    <Image 
                        src="/Web4.jpg"
                        width={1000}
                        height={600}
                        alt=""
                        className="object-cover lg:w-[25vw] lg:h-[25vw]"                        
                    />
                    <h1 className="flex justify-center text-white pt-10">
                        FAA Medical Exams
                    </h1>
                    <p className="text-white pt-5">
                        Offering First, Second, & Third Class Medicals, as well as initial exams for Student Pilot Medical Certificates.
                    </p>
                </div>
                <div className="lg:mx-6 lg:max-w-[25vw] w-[90vw] h-auto py-4">
                    <Image 
                        src="/ekg.jpg"
                        width={1000}
                        height={600}
                        alt=""
                        className="object-cover lg:w-[25vw] lg:h-[25vw]"
                    />
                        <h1 className="flex justify-center text-white pt-10">
                            EKG
                        </h1>
                        <p className="pt-5 text-white">
                            FAA-approved EKG - On-site for your convenience.
                        </p>
                </div>
                <div className="lg:mx-6 lg:max-w-[25vw] w-[90vw] h-auto py-4">
                    <Image 
                        src="/ekg.jpg"
                        width={1000}
                        height={600}
                        alt=""
                        className="object-cover lg:w-[25vw] lg:h-[25vw]"
                    />
                    <h1 className="flex justify-center text-white pt-10">
                        Complex Medical Issues?
                    </h1>
                    <p className="text-white pt-5">
                        We can confidently act as a liaison between you and the FAA to ensure efficiency with complex medical issues or special issuance circumstances.
                    </p>
                </div>
            </div>
            <div>
                <h1 className="flex justify-center text-white pt-10 text-3xl">
                    Exam Details
                </h1>
                <p className="flex justify-center text-center text-white mx-[10vw] pt-5">
                Prior to each aviation medical examination, pilots must first complete the online FAA MedXpress form (FAA 8500-8), link below. Upon completion, you will be assigned a confirmation number which must be presented upon arrival for your aviation medical exam appointment.
                </p>
                <div className="flex justify-center pt-10 text-white text-xl p-10">
                    <a 
                        href='https://medxpress.faa.gov/MedXpress/Login.aspx' 
                        target='_blank'
                        className="bg-gray-800/80 p-5 rounded-3xl border-2 border-white"
                    >         
                    FAA MedExpress
                    </a>
                </div>
            </div>
        </div>
        
    )
}