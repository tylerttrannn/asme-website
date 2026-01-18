import { useState } from "react";
import MenuIcon from "../assets/burger-bar.png"; 

function MobileNavbar(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="md:hidden w-full px-6 py-4 flex justify-between items-center bg-white border-b relative">
        <span className="font-bold">Logo</span>
        
        <button onClick={() => setIsOpen(!isOpen)} className="z-50">
            {isOpen ? (
            <span className="text-2xl font-bold">✕</span> 
            ) : (
            <img src={MenuIcon} alt="menu" className="w-6 h-6" /> 
            )}
        </button>

        {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-xl p-6 z-40 border-b">
                <ul className="flex flex-col gap-6 text-lg">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Events</li>
                <li className="cursor-pointer">Yearbook</li>
                <li className="cursor-pointer">Store</li>
                </ul>
            </div>
        )}
        </div>
    )

}

export default MobileNavbar;