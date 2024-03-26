import React from 'react';
import {Link} from 'react-router-dom';

const Page2 = () => {
  return (
    <section className="w-screen h-screen short-stack-regular select-none">
      <div className='flex justify-center items-center w-full h-full'>
        <div className="relative w-[1280px] h-full">
          <div className="absolute inset-0 flex flex-col items-center pt-24 space-y-10">

            <div className='w-10/12 flex flex-col items-center h-fit space-y-3'>
              <div className='w-full text-4xl'>
                <p>Can you figure out the definition of setting from the following examples?</p>
              </div>

              <div className='w-full text-2xl'>
                <p>(take a minute to think about this)</p>
              </div>

              <div className='w-full flex justify-evenly'>
                <div className='w-80 flex flex-col space-y-2 p-3'>
                  <img className='w-full' src='../images/sunny-day-image.png' alt=''/>
                  <p className='text-xl text-center'>Sunny day at a beach</p>
                </div>
                <div className='w-80 flex flex-col space-y-2 p-3'>
                  <img className='w-full' src='../images/cold-night-image.png' alt=''/>
                  <p className='w-full text-xl text-center'>A cold rainy night in a haunted house in October</p>
                </div>
              </div>

              <div className='w-full text-xl'>
                <p>So, what do you think the definition of setting is?</p>
              </div>

              <div className='w-full flex text-xl'>
                <div className='flex w-5/6 items-center space-x-3'>
                  <p>Any guesses?</p>
                  <img className='h-12'  src='../images/input-container.png' alt=''/>
                </div>
                <div className='flex w-1/6 items-center space-x-3'>
                  <p>Hint:</p>
                  <img className='w-12'  src='../images/clock-icon.png' alt=''/>
                  <img className='w-12'  src='../images/home-icon.png' alt=''/>
                </div>
              </div>

              <div className='relative w-full text-2xl'>
                <div className="absolute inset-0 flex justify-center items-center px-6 ">
                  <div className='w-full flex flex-col items-start'>
                    <div className='flex items-center'>
                      <p className='text-2xl text-white'>Setting is the time </p>
                      <span><img className='w-10 mx-2' src='../images/clock-icon.png' alt=''/></span>
                      <p className='text-2xl text-white'> and place </p>
                      <span><img className='w-10 mx-2' src='../images/home-icon.png' alt=''/></span>
                      <p className='text-2xl text-white'> of a story. It often answers the</p>
                    </div>
                    <div className='flex items-center'>
                      <p className='text-2xl text-white'> questions: when? and where?</p>
                    </div>
                  </div>
                </div>
                <img className='w-full' src='./images/container-primary-small.png' alt=''/>
              </div>

              <div className='w-full text-xl'>
                <p>The time of the story could be in the past, future, day, night, summer or winter.
                  A story may take place in a school, a mall, a desert, an airplane or in a variety
                  of other places.</p>
              </div>
            </div>

            <div className='w-11/12 flex justify-between px-4 pt-4'>
              <img className='w-14 cursor-pointer' src='./images/voice-icon.png' alt=''/>
              <div className='flex justify-center items-center space-x-2'>
                <Link to={'/'}><img className='w-10' src='./images/button-previous.png' alt=''/></Link>
                <img className='w-20' src='./images/page-number-2.png' alt=''/>
                <Link><img className='w-10' src='./images/button-next.png' alt=''/></Link>
              </div>
              <img className='w-14 cursor-pointer' src='./images/info-icon.png' alt=''/>
            </div>
            <img className='absolute right-0 bottom-1/2 w-20' src='../images/question.png' alt=''/>
          </div>

          <img className="w-full h-full" src="../images/background.png" alt="Background" />

        </div>
      </div>
    </section>
  )
}

export default Page2
