import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Page2 = ({windowDimensions }) => {
  const [isOverlayDivVisible, setOverlayDivVisible] = useState(false);

  const handleCloseButtonClick = () => {
    setOverlayDivVisible(false);
  };

  const handleQuestionButtonClick = () => {
    setOverlayDivVisible(!isOverlayDivVisible);
  };

  return (
    <section className="w-screen h-screen short-stack-regular select-none">
      <div className={`overlayDiv absolute inset-0 bg-[#6C5D4A] opacity-90 z-50 p-12 h-1/2 xl:h-full ${isOverlayDivVisible ? 'block' : 'hidden'}`}>
        <div className='w-full flex flex-col h-full border-2 border-white rounded-2xl'>
          <div className='flex justify-end p-4 2xl:p-6'>
            <img onClick={handleCloseButtonClick} className='w-10 xl:w-12 2xl:w-16 cursor-pointer' src='../images/close-button.png' alt=''></img>
          </div>
          <div className='flex justify-center text-white'>
            <p className='text-xl xl:text-2xl 2xl:text-4xl'>Guide Sheet</p>
          </div>
          <div className='w-full text-lg 2xl:text-2xl text-white mt-52 px-6 2xl:px-10'>
              <p>So, what do you think the definition of setting is?</p>
          </div>
          <div className='w-full flex text-xs xl:text-lg 2xl:text-2xl text-white px-6 2xl:px-10 py-6'>
            <div className='flex w-5/6 items-center space-x-3'>
              <p>Any guesses?</p>
              <div className='relative'>
              <input type="text" className="absolute inset-0 h-10 xl:h-16 bg-transparent border-none text-black px-6 text-3xl" placeholder=""/>
              <img className='h-6 xl:h-12 2xl:h-16'  src='../images/input-container.png' alt=''/>
              </div>
            </div>
            <div className='flex w-1/6 items-center space-x-4'>
              <p>Hint:</p>
              <img className='w-8 2xl:w-14 cursor-pointer' src='../images/clock-icon.png' alt=''/>
              <img className='w-8 2xl:w-14 cursor-pointer' src='../images/home-icon.png' alt=''/>
            </div>
          </div>
        </div>
      </div>
        <div className='flex justify-center items-center w-full'>
        <div className="relative" style={{ height: windowDimensions.isTablet ? 'auto' : windowDimensions.height, width: windowDimensions.width }}>
          <div className="div1 absolute inset-0 flex flex-col items-center pt-14 xl:pt-24 space-y-10">
            <div className='w-10/12 flex flex-col items-center h-fit space-y-2 xl:space-y-3'>
              <div className='w-full text-lg xl:text-2xl 2xl:text-4xl'>
                <p>Can you figure out the definition of setting from the following examples?</p>
              </div>

              <div className='w-full xl:text-lg 2xl:text-2xl'>
                <p>(take a minute to think about this)</p>
              </div>

              <div className='w-full flex justify-evenly'>
                <div className='w-48 xl:w-60 2xl:w-80 flex flex-col space-y-2 p-0 xl:p-3'>
                  <img className='w-full' src='../images/sunny-day-image.png' alt=''/>
                  <p className='text-xs xl:text-sm 2xl:text-xl text-center'>Sunny day at a beach</p>
                </div>
                <div className='w-48 xl:w-60 2xl:w-80 flex flex-col space-y-2 p-0 xl:p-3'>
                  <img className='w-full' src='../images/cold-night-image.png' alt=''/>
                  <p className='text-xs xl:text-sm 2xl:text-xl text-center'>A cold rainy night in a haunted house in October</p>
                </div>
              </div>

              <div className='w-full text-sm xl:text-xl'>
                <p>So, what do you think the definition of setting is?</p>
              </div>

              <div className='w-full flex text-xs xl:text-lg 2xl:text-xl'>
                <div className='flex w-5/6 items-center space-x-3'>
                  <p>Any guesses?</p>
                  <img className='h-7 xl:h-12'  src='../images/input-container.png' alt=''/>
                </div>
                <div className='flex w-1/6 items-center space-x-3'>
                  <p>Hint:</p>
                  <img className='w-8 2xl:w-12 cursor-pointer'  src='../images/clock-icon.png' alt=''/>
                  <img className='w-8 2xl:w-12 cursor-pointer'  src='../images/home-icon.png' alt=''/>
                </div>
              </div>

              <div className='relative w-full text-sm xl:text-lg 2xl:text-2xl'>
                <div className="absolute inset-0 flex justify-center items-center px-6 ">
                  <div className='w-full flex flex-col items-start'>
                    <div className='flex items-center'>
                      <p className='text-white'>Setting is the time </p>
                      <span><img className='w-6 2xl:w-10 mx-2' src='../images/clock-icon.png' alt=''/></span>
                      <p className='text-white'> and place </p>
                      <span><img className='w-6 2xl:w-10 mx-2' src='../images/home-icon.png' alt=''/></span>
                      <p className='text-white'> of a story. It often answers the</p>
                    </div>
                    <div className='flex items-center'>
                      <p className='text-white'> questions: when? and where?</p>
                    </div>
                  </div>
                </div>
                <img className='w-full 2xl:h-28' src='./images/container-primary-small.png' alt=''/>
              </div>

              <div className='w-full text-xs xl:text-lg 2xl:text-xl'>
                <p>The time of the story could be in the past, future, day, night, summer or winter.
                  A story may take place in a school, a mall, a desert, an airplane or in a variety
                  of other places.</p>
              </div>
            </div>

            <div className='absolute bottom-2 2xl:bottom-4 w-11/12 flex justify-between px-4'>
              <img className='w-8 h-8 xl:w-12 xl:h-12 2xl:w-14 cursor-pointer' src='./images/voice-icon.png' alt=''/>
              <div className='flex justify-center items-center space-x-2'>
                <Link to={'/'}><img className='w-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10' src='./images/button-previous.png' alt=''/></Link>
                <img className='w-10 xl:w-16 xl:h-10 2xl:w-20 2xl:h-12' src='./images/page-number-2.png' alt=''/>
                <Link><img className='w-6 xl:w-8 2xl:w-10 2xl:h-10' src='./images/button-next.png' alt=''/></Link>
              </div>
              <img className='w-8 h-8 xl:w-12 xl:h-12 2xl:w-14 cursor-pointer' src='./images/info-icon.png' alt=''/>
            </div>

            <img onClick={handleQuestionButtonClick} className='absolute right-0 bottom-1/2 w-16 2xl:w-20 cursor-pointer' src='../images/question.png' alt=''/>
          </div>
          <img className="w-full h-full" src="../images/background.png" alt="Background" />

        </div>
      </div>
    </section>
  )
}

export default Page2
