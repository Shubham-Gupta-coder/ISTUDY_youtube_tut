// Get All The Components at codewind.vercel.app
import Link from "next/link"
import Landing from "../components/Landing"

export default function Home() {
  return (
    <>
    <Landing title="iStudy Courses - Made With Love" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, vitae. Nemo ut, optio delectus autem expedita repudiandae ratione ducimus ad eos, libero perferendis quaerat architecto magnam. Rerum fugit dolore quibusdam."/>
            <div className="container mx-auto my-10">

            <h1 className="w-full my-2 text-white text-center text-4xl rounded-xl bg-gradient-to-r py-5 from-cyan-500 to-blue-500 font-bold">
                      Best Courses
              </h1>
            <div className="flex my-10 flex-wrap justify-center">
            <div className="border m-5 border-slate-500 flex flex-col items-center justify-between rounded-2xl w-[300px] h-[400px]">
                    <h2 className="w-full text-center text-white text-2xl rounded-b-none rounded-xl bg-gradient-to-r py-5 from-cyan-500 to-blue-500 font-bold">
                      Learn Hacking
                    </h2>
                    <img
                      className="w-5/6 rounded-xl"
                      src="https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="templates"
                    />
                    <Link href="/hacking">
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
                    <Link href="/webdev">
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
                    <Link href="/appdev">
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
                    <Link href="/uiux">
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
