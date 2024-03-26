import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <section className="w-screen h-screen short-stack-regular select-none">
      <div className='flex justify-center items-center w-full h-full'>
        <div className="relative w-[1280px] h-full">
            <div className="absolute inset-0 flex flex-col items-center">
              <div className='w-9/12 h-fit'>
                <img className='w-40 py-3' src='./images/week-1.png' alt=''/>
              </div>

              <div className='w-10/12 flex flex-col items-center h-fit space-y-2'>
                <div className='relative w-1/2'>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <p className='text-3xl text-white'>Elements Of Story Writing</p>
                  </div>
                  <img className='w-full py-2' src='./images/topic-container.png' alt=''/>
                </div>
                <div className='w-full text-2xl'>
                  <p>Welcome to term 2 of Writers Club. Are you excited for this amazing journey?
                    Over the next week, we will be practicing the different elements of story writing.
                    Our aim is to make stories more interesting and exciting.</p>
                </div>

                <div className='relative w-full text-2xl'>
                  <div className="absolute inset-0 flex justify-center items-center px-6 ">
                    <div className='w-5/6'>
                      <p className='text-2xl text-white'>There are <span className='font-semibold'>five</span> elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:</p>
                    </div>
                    <div className='flex justify-end w-1/6'>
                      <img className='w-28' src='./images/boy.png' alt=''/>
                    </div>
                  </div>
                  <img className='w-full' src='./images/container-primary.png' alt=''/>
                </div>

                <div className='grid grid-cols-5 text-black text-xl'>
                  <div className='relative w-full p-2'>
                    <div className="absolute inset-0 flex justify-center items-center">
                      <p className=''>SETTING</p>
                    </div>
                    <img className='w-full py-2' src='./images/cloud-1.png' alt=''/>
                  </div>
                  <div className='relative w-full p-2'>
                    <div className="absolute inset-0 flex justify-center items-center">
                      <p className=''>CHARACTERS</p>
                    </div>
                    <img className='w-full py-2' src='./images/cloud-2.png' alt=''/>
                  </div>
                  <div className='relative w-full p-2'>
                    <div className="absolute inset-0 flex justify-center items-center">
                      <p className=''>PLOT</p>
                    </div>
                    <img className='w-full py-2' src='./images/cloud-1.png' alt=''/>
                  </div>
                  <div className='relative w-full p-2'>
                    <div className="absolute inset-0 flex justify-center items-center">
                      <p className='text-center'>PROBLEM OR CONFLICT</p>
                    </div>
                    <img className='w-full py-2' src='./images/cloud-3.png' alt=''/>
                  </div>
                  <div className='relative w-full p-2'>
                    <div className="absolute inset-0 flex justify-center items-center">
                      <p className=''>RESOLUTION</p>
                    </div>
                    <img className='w-full py-2' src='./images/cloud-4.png' alt=''/>
                  </div>
                </div>

                <div className='w-full text-2xl'>
                  <p>You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.</p>
                </div>

                <div className='relative w-full text-2xl py-8'>
                  <div className="absolute inset-0 flex justify-center items-center px-6">
                    <div className='w-full flex flex-col px-6 pb-5'>
                      <p className='text-2xl text-black'>For today's lesson, we will try to understand and practice writing the setting for our stories.</p>
                      <p className='text-2xl text-black'>The setting is an important element of every fiction story.</p>
                    </div>
                  </div>
                  <img className='w-full' src='./images/container-secondary.png' alt=''/>
                </div>
              </div>

              <div className='w-11/12 flex justify-between px-4 pt-4'>
                <img className='w-14 cursor-pointer' src='./images/voice-icon.png' alt=''/>
                <div className='flex justify-center items-center space-x-2'>
                  <Link><img className='w-10' src='./images/button-previous.png' alt=''/></Link>
                  <img className='w-20' src='./images/page-number-1.png' alt=''/>
                  <Link to={'page-2'}><img className='w-10' src='./images/button-next.png' alt=''/></Link>
                </div>
                <img className='w-14 cursor-pointer' src='./images/info-icon.png' alt=''/>
              </div>
            </div>
          
          <img className="w-full h-full" src="../images/background.png" alt="Background" />
        </div>
      </div>
    </section>
  )
}

export default Page1