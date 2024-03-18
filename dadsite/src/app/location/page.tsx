import Image from "next/image"

export default function Location() {
    return (
        <div className="p-10">    
            <div>   
                <h1 className="flex justify-center uppercase text-5xl text-[#07668C] pt-5">Location</h1>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-bold pt-10">
                    Conveniently Located at Gerald R Ford Airport
                </h2>
                <p>
                    Discover the unparalleled convenience of Pilot Medical Exams, PLLC, situated right at the heart of Gerald R Ford Airport in Grand Rapids, MI. Our strategic location within the prestigious Amway Aviation Hangar offers pilots and aviation enthusiasts a seamless
                    experience for their medical needs.
                </p>

                <h2 className="font-bold pt-10">
                    World-Class Facilities at Amway Aviation Hangar
                </h2>
                <p>
                    Step into the world of aviation excellence as you enter the iconic Amway Aviation Hangar, where Pilot   Medical Exams, PLLC, calls home. Designed to cater to the needs of discerning pilots and aviation     professionals, the Amway Hangar embodies sophistication and modernity.
                </p>

                <h2 className="font-bold pt-10">
                    Experience Unmatched Convenience
                </h2>
                <p>
                    With our office located within the Amway Hangar, pilots can seamlessly integrate their medical appointments into their busy schedules. Say goodbye to the hassle of traveling to separate locations for your medical exams - at Pilot Medical Exams, PLLC, your aviation medical needs are met right where you need them.
                </p>
                <h2 className="font-bold pt-10">
                    Efficiency Redefined
                </h2>
                <p>
                    At Pilot Medical Exams, PLLC, we understand the value of time for pilots. Our convenient location means you can efficiently complete your medical exam and return to the skies with confidence. Experience streamlined services and personalized care in a setting that reflects the excellence of aviation at the Amway Aviation Hangar.
                </p>
                <h2 className="font-bold pt-10">
                    Your Gateway to World-Class Aviation
                </h2>
                <p>
                    Join us at Pilot Medical Exams, PLLC, and discover the unparalleled convenience and world-class style of the Amway Aviation Hangar. Contact us today to schedule your appointment and experience the difference of aviation medical care tailored to your needs.
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