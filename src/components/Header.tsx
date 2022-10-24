import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
    const [top, setTop] = useState(true)

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return (
        <header
            className={`fixed w-full z-30 bg-white transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'
                }`}
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Site branding */}
                    <div className="flex-shrink-0 mr-4 flex ">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="Cruip">
                            <img src="src/resources/images/logo-unfilled.svg" className="h-14" />
                        </Link>
                        <div className="pl-3">
                            {/* <h1
                                className=" flex text-2xl md:text-2xl font-extrabold leading-tighter tracking-tighter mt-1 bg-clip-text text-transparent bg-gradient-to-r from-black to-black"
                                data-aos="zoom-y-out"
                            >
                                Cotripam
                            </h1> */}
                        </div>
                    </div>
                    <a href="#contato">
                        <p>Contato</p>
                    </a>
                </div>
            </div>
        </header>
    )
}
