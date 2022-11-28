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
        <div className="container my-10 mx-auto flex items-center flex-col md:flex-row justify-around shadow-[10px_10px_20px_0_#00000031] rounded-xl p-10">
          <div className="text flex 3/4 md:w-1/2 flex-col justify-center">
            <h4 className='text-4xl my-2'>{props.heading} Easily with the help of iStudy</h4>
            <p className='leading-7'>on et officiis laudantium repellat, asperiores, dignissimos doloribus perspiciatis placeat sed voluptatem accusantium ullam? Atque nihil corporis fuga maiores incidunt ea deserunt, eum aliquid? Temporibus at doloremque rem maiores numquam veniam exercitationem soluta ab. Laboriosam veniam id cupiditate deleniti quam pariatur voluptatum perspiciatis totam reiciendis. Eaque nostrum doloribus similique incidunt, ex ab nemo in quaerat error sed quas earum dolorem!</p>
          </div>
          <div className="img">
            <img className="w-[300px] rounded-xl" src={props.img} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-around flex-wrap p-10 w-full">
          <div className="flex items-baseline mr-5 justify-center p-5 shadow-[10px_10px_20px_0_#00000031] rounded-xl">
            <h3 className='text-3xl mx-5'>Course Length:</h3>
            <p className='text-2xl'>7 Hours 32 Mins</p>
          </div>
          <div className="flex items-center justify-center p-5  shadow-[10px_10px_20px_0_#00000031] rounded-xl">
            <h3 className='text-3xl md:mx-5'>Course Rating:</h3>
            <div className="flex">
              <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=740&t=st=1669474986~exp=1669475586~hmac=59ff567d32de434dcc736dddcd5f540692522c8d2dde9fd634684168f3c9814e" className='w-[20px] md:w-[50px]' alt="" />
              <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=740&t=st=1669474986~exp=1669475586~hmac=59ff567d32de434dcc736dddcd5f540692522c8d2dde9fd634684168f3c9814e" className='w-[20px] md:w-[50px]' alt="" />
              <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=740&t=st=1669474986~exp=1669475586~hmac=59ff567d32de434dcc736dddcd5f540692522c8d2dde9fd634684168f3c9814e" className='w-[20px] md:w-[50px]' alt="" />
              <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=740&t=st=1669474986~exp=1669475586~hmac=59ff567d32de434dcc736dddcd5f540692522c8d2dde9fd634684168f3c9814e" className='w-[20px] md:w-[50px]' alt="" />
              <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=740&t=st=1669474986~exp=1669475586~hmac=59ff567d32de434dcc736dddcd5f540692522c8d2dde9fd634684168f3c9814e" className='w-[20px] md:w-[50px]' alt="" />
            </div>
          </div>
        </div>
        
        <button className="p-2 w-full bg-none text-cyan-500 border-2 border-cyan-500 hover:bg-cyan-500 rounded-md m-2 hover:text-[#fff] cursor-pointer transition-all text-3xl uppercase font-medium">
                  BUY THIS course 
              </button>
            
      </div>
    </>
  )
}

export default Coursepage