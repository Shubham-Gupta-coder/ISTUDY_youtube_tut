import React from 'react'

const Landing = (props) => {
  return (
    <>
    <style jsx>
        {
            `
              .main{
                position:relative;
                background:#00000050;
                color:white;
              }
              .main::after{
                content:"";
                width:100%;
                height:100%;
                z-index:-1;
                position:absolute;
                left:0;
                top:0;
                background:url(https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
                background-attachment:fixed;
              }
            `
        }
    </style>
    <div className="main w-screen p-10 py-20 flex items-center justify-center flex-col">
        <h2 className='text-3xl my-5 uppercase'>{props.title}</h2>
        <p className='w-1/2 text-center leading-8 font-extralight'>{props.desc}</p>
    </div>
    </>
  )
}

export default Landing