// import React from 'react'

// const Page1 = () => {
//   return (
//     <section className="w-full h-[110vh] bg-[url('images/background-resized.png')]">
//       <div className="w-full h-full bg-[url('images/background-resized.png')]">

//       </div>
//     </section>
//   )
// }

// export default Page1
import React from 'react'

const Page1 = () => {
  return (
    <section className="w-screen h-screen">
      <div className='flex justify-center items-center w-full h-full'>
        <div className="relative w-[1280px] h-full border border-black">
          <div className="absolute inset-0 flex flex-col items-center border border-black">
              <div className='w-9/12 h-fit border border-black'>
                <img className='w-40 py-3' src='./images/week-1.png'></img>
              </div>
              <div className='w-10/12 flex flex-col items-center h-fit border border-black'>
                <div className='w-1/2 border border-black'>
                  <img className='w-full py-2' src='./images/topic-container.png'></img>
                </div>
                <div className='w-1/2 border border-black'>
                  <p></p>
                </div>
              </div>
          </div>
          
          <img className="w-full h-full" src="../images/background.png" alt="Background" />
        </div>
      </div>
    </section>
  )
}

export default Page1