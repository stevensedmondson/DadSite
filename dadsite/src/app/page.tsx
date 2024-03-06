import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex font-semibold w-full lg:w-auto h-auto flex-col items-center">
      <div className="max-w-[90vw]">
        <Image
          src="/headshot1.jpg"
          alt=""
          width={1140}
          height={500}
          priority
        />
        
      </div>
    </div>
      
    
  );
}    
      