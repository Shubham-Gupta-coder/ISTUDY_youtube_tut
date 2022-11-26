import React from 'react'

const Coursepage = (props) => {
  return (
    <>
      <div className="container mx-auto my-5 min-h-screen w-[80vw] ">
        <div className="flex items-center justify-center">

        <h1 className="mx-auto w-[80vw] text-white text-center text-4xl rounded-xl bg-gradient-to-r py-5 from-cyan-500 to-blue-500 font-bold">
          {props.heading}
              </h1>
            
        </div>
        <div className="container my-10 mx-auto flex items-center justify-around shadow-[10px_10px_20px_0_#00000031] rounded-xl p-10">
          <div className="text flex w-1/2 flex-col justify-center">
            <h4 className='text-4xl my-2'>Web Development Made Easy by iStudy</h4>
            <p className='leading-7'>on et officiis laudantium repellat, asperiores, dignissimos doloribus perspiciatis placeat sed voluptatem accusantium ullam? Atque nihil corporis fuga maiores incidunt ea deserunt, eum aliquid? Temporibus at doloremque rem maiores numquam veniam exercitationem soluta ab. Laboriosam veniam id cupiditate deleniti quam pariatur voluptatum perspiciatis totam reiciendis. Eaque nostrum doloribus similique incidunt, ex ab nemo in quaerat error sed quas earum dolorem!</p>
          </div>
          <div className="img">
            <img className="w-[300px] rounded-xl" src={props.img} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-around p-10 w-full">
          <div className="flex items-baseline mr-5 justify-center p-5 w-1/2 shadow-[10px_10px_20px_0_#00000031] rounded-xl">
            <h3 className='text-3xl mx-5'>Course Length:</h3>
            <p className='text-2xl'>7 Hours 32 Mins</p>
          </div>
          <div className="flex items-baseline justify-center p-5 w-1/2 shadow-[10px_10px_20px_0_#00000031] rounded-xl">
            <h3 className='text-3xl mx-5'>Course Rating:</h3>
            <p className='text-2xl'>5 Stars</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coursepage