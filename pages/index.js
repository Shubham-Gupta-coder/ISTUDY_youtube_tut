// Get All The Components at codewind.vercel.app
// Get All The Components at codewind.vercel.app

import { useState } from "react";
            import Link from "next/link";
export default function Home() {
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
                </header>
            
            <div className="container mx-auto my-10">

            <h1 className="w-full my-2 text-white text-center text-4xl rounded-xl bg-gradient-to-r py-5 from-cyan-500 to-blue-500 font-bold">
                      Best Courses
              </h1>
            <div className="flex my-10">
            <div className="border m-5 border-slate-500 flex flex-col items-center justify-between rounded-2xl w-[300px] h-[400px]">
                    <h2 className="w-full text-center text-white text-2xl rounded-b-none rounded-xl bg-gradient-to-r py-5 from-cyan-500 to-blue-500 font-bold">
                      Learn Hacking
                    </h2>
                    <img
                      className="w-5/6 rounded-xl"
                      src="https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="templates"
                    />
                    <Link href="/components">
                      <button className="text-center text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold p-4 px-8 mb-4">
                        Learn Now
                      </button>
                    </Link>
                  </div><div className="border m-5 border-slate-500 flex flex-col items-center justify-between rounded-2xl w-[300px] h-[400px]">
                    <h2 className="w-full text-center text-white text-2xl rounded-b-none rounded-xl bg-gradient-to-r py-5 from-cyan-500 to-blue-500 font-bold">
                      Learn Web. Dev.
                    </h2>
                    <img
                      className="w-5/6 rounded-xl"
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1"
                      alt="templates"
                    />
                    <Link href="/components">
                      <button className="text-center text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold p-4 px-8 mb-4">
                        Learn Now
                      </button>
                    </Link>
                  </div><div className="border m-5 border-slate-500 flex flex-col items-center justify-between rounded-2xl w-[300px] h-[400px]">
                    <h2 className="w-full text-center text-white text-2xl rounded-b-none rounded-xl bg-gradient-to-r py-5 from-cyan-500 to-blue-500 font-bold">
                      Learn App Dev.
                    </h2>
                    <img
                      className="w-5/6 rounded-xl"
                      src="https://miro.medium.com/max/510/1*vERs5fGwdo5l3IB4HQmyYg.png"
                      alt="templates"
                    />
                    <Link href="/components">
                      <button className="text-center text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold p-4 px-8 mb-4">
                        Learn Now
                      </button>
                    </Link>
                  </div><div className="border m-5 border-slate-500 flex flex-col items-center justify-between rounded-2xl w-[300px] h-[400px]">
                    <h2 className="w-full text-center text-white text-2xl rounded-b-none rounded-xl bg-gradient-to-r py-5 from-cyan-500 to-blue-500 font-bold">
                      Learn UI/UX
                    </h2>
                    <img
                      className="w-5/6 rounded-xl"
                      src="https://www.rankbyfocus.com/wp-content/uploads/2022/01/sketch-vs-figma-vs-adobe-xd.png"
                      alt="templates"
                    />
                    <Link href="/components">
                      <button className="text-center text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold p-4 px-8 mb-4">
                        Learn Now
                      </button>
                    </Link>
                  </div>
                  </div>
            </div>
    </>
  )
}
