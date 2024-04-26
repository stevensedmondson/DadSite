import Image from "next/image"

export default function Location() {
    return (
        <div className="p-10 w-full]">    
            <div>   
                <h1 className="flex justify-center uppercase font-semibold font-calibri text-5xl pt-24 text-white">Location</h1>
            </div>
            <div className="flex flex-col items-center text-white">
                <h2 className="font-bold pt-10">
                    Gerald R. Ford International Airport - KGRR
                </h2>
                <p>
                    Conveniently situated in the world class hangar space of Amway Aviation at Gerald R. Ford International Airport.  
                </p>
            </div>
            <div className="flex justify-center pt-10">
                <Image
                    src='/map1.JPG'
                    width={800}
                    height={800}
                    alt="">
                </Image>
            </div>
        </div>
    )
}