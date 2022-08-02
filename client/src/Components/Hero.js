import React from "react"
import pic1 from "../Assets/pic1.png"
import pic2 from "../Assets/pic2.png"
import pic3 from "../Assets/pic3.png"

function Hero() {
    return (
        <div className="" >

            {/* <div className="bg-black w-full h-full">
        <p className="text-white text-xs text-center text-thin"> Free Shipping Over $100</p>
    </div> */}

            <div className="h-full grid grid-cols-3 relative">

                <div className="row-span-2 col-span-2">
                    <div className="w-full h-full">
                        <img className="w-full h-full" src={pic1} />
                    </div>
                    <div className="top-5 left-5">
                        <h1 className="absolute font-extrabold text-white text-3xl">TAKE A HIKE</h1>
                    </div>
                </div>

                <div className="w-full h-full">
                    <img className="w-full h-full" src={pic2} />
                </div>

                <div className="w-full h-full">
                    <img className="w-full h-full" src={pic3} />
                </div>

            </div>
        </div>
    )
}

export default Hero