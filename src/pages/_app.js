import Link from "next/link"
import { useRouter } from "next/router"



export default function App ({ Component, pageProps }) {
    const router = useRouter()
    
    return (
        <>
            <div className="flex items-center justify-center text-white w-full h-[10vh] bg-blue-700/30">
                <div>
                    <h1 className="flex p-5 justify-center bg-black/70 border-solid border-black rounded-lg">Pilot Medical Exams, PLLC</h1>
                    <nav>
                        <ul className="flex justify-center pt-5">
                            <li className="px-2">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="px-2">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="px-2">
                                <Link href="/location">Location</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </div>
            <Component {...pageProps} />
            <div className="flex items-center justify-center text-white w-full h-[10vh] bg-blue-700/30">
                <h1>Footer Section!</h1>
            </div>
        </>
    )
}