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

            <div className="flex justify-center uppercase text-[#07668C] font-semibold font-calibri text-4xl pt-12">Our Services</div>

            <div className="flex max-lg:flex-col items-center justify-items-center lg:justify-center w-full pt-10">    
                <div className="lg:mx-5 max-w-[500px] min-w-[300px]">
                    <Image 
                        src="/stock1.jpeg"
                        width={1000}
                        height={600}
                        alt=""
                    />
                    <h1 className="flex justify-center">
                        FAA Medical Exams
                    </h1>
                </div>
                <div className="lg:mx-5 max-w-[500px] min-w-[300px]">
                    <Image 
                        src="/ekg.jpeg"
                        width={1000}
                        height={600}
                        alt=""
                    />
                    <h1 className="flex justify-center">
                        EKG
                    </h1>
                </div>
                <div className="lg:mx-5 max-w-[500px] min-w-[300px]">
                    <Image 
                        src="/stock3.jpeg"
                        width={1000}
                        height={600}
                        alt=""
                    />
                    <h1 className="flex justify-center">
                        Special Issuance
                    </h1>
                </div>
            </div>
        </div>
        
    )
}