import React from "react"
import pic1 from "../Assets/pic1.png"
import pic2 from "../Assets/pic2.png"
import pic3 from "../Assets/pic3.png"

function Hero() {
    return (
        <div className=" " >
            {/* <div className="bg-black w-full h-full">
        <p className="text-white text-xs text-center text-thin"> Free Shipping Over $100</p>
    </div> */}
            <div className="grid grid-cols-3">
                <div className="row-span-2 col-span-2 relative">
                    <div className=" w-full h-full">
                        <img className="object-cover h-full w-full " src={pic1} />
                        <div className="absolute flex flex-col left-20 top-32 w-6/12">
                            <div className="text-white">
                                <div className="pb-3">
                                    <h1 className="text-4xl font-bold uppercase flex flex-col pb-2">TAKE A HIKE.</h1>
                                </div>
                                <div className="pb-3">
                                    <h2 className="text-MD capitalize flex flex-col pb-2">This limited edition reminds you to get out and enjoy our natural playground. With each pair sold, we give a cut to our friends at Protect Our Winters.</h2>
                                </div>
                            </div>
                            <div>
                                <button className="bg-[#EDEDED] w-full h-12 text-center text-xs font-bold tracking-wider">SHOP LIMITED-EDITION DIME 2</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full">
                        <img className=" mx-auto object-center w-full h-full" src={pic2}></img>
                        <div className="absolute flex flex-col w-2/12 text-center">
                            <div className="text-white">
                                <div className="leading-none">
                                    <h1 className="text-md font-bold uppercase flex flex-col pb-2">SMART FEATURES, WIRELESS CHARGING.</h1>
                                </div>
                                <div className="">
                                    <h2 className="text-xs capitalize flex flex-col pb-2">Shop Grind Fuel</h2>
                                </div>
                            </div>
                    </div>

                </div>

                <div className="w-full h-full">
                    <img className="w-full h-full" src={pic3} />
                </div>

            </div>
        </div>
    )
}

export default Hero