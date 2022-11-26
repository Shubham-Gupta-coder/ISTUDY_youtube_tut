import { useState } from "react";
import Link from "next/link";
function Navbar() {
  const [hide, setHide] = useState("hidden");
  return (
    <>
      
                <header className="flex-col z-10 lg:flex-row flex items-center justify-around p-2 bg-gradient-to-r py-2 from-cyan-500 to-blue-500">
                  <div className="logo flex justify-around w-full lg:w-auto items-center">
                    
                    <h1 className="mx-2 text-white text-2xl font-mediumbold ">iStudy</h1>
                    <div
                      className="transition-all bg-white p-[15px] lg:hidden rounded-full"
                      onClick={() => {
                        if (hide == "hidden") {
                          setHide("block");
                        } else {
                          setHide("hidden");
                        }
                      }}
                    >
                      <img src="bars-solid.svg" width="30" alt="" />
                    </div>
                  </div>
                  <nav className={`lg:block transition-all ${hide}`}>
                    <ul className="flex flex-wrap transition-all justify-center items-center ">
                      <Link href="/">
                        <li className="text-xl lg:text-base mx-2 text-[#fff] hover:border-2 hover:border-white hover:rounded-xl p-2 cursor-pointer transition-all">
                          Home
                        </li>
                      </Link>
                      <Link href="/about">
                        <li className="text-xl lg:text-base mx-2 text-[#fff] hover:border-2 hover:border-white hover:rounded-xl p-2 cursor-pointer transition-all">
                          About Us
                        </li>
                      </Link>
                      <Link href="/contact">
                        <li className="text-xl lg:text-base mx-2 text-[#fff] hover:border-2 hover:border-white hover:rounded-xl p-2 cursor-pointer transition-all">
                          Contact Us
                        </li>
                      </Link>
                    </ul>
                  </nav>
                </header></>
                )}

export default Navbar;