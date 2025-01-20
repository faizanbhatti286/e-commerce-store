import React from 'react'
import Image from 'next/image'

export const LogoSection = () => {
  return (
    <div className='md:w-[1570px] h-[150px] bg-black flex justify-center flex-row sm:space-x-3 md:justify-evenly items-center m-auto  flex-wrap ' >
        <Image
        src={'/images/versace.png'}
        width={100}
        height={100}
        alt='versace logo'
        className='sm:w-[122.5px] h-[34px] sm:gap-3 sm:ml-16'
        />
        <Image
        src={'/images/zara.png'}
        width={100} 
        height={100}
        alt='zara logo'
        className='sm:w-[91px] h-[33px] sm:gap-3 md:ml-16'
        />
        <Image
        src={'/images/gucci.png'}
        width={100}
        height={100}
        alt='gucci logo'
        className='sm:w-[156px] h-[36px] sm:gap-2'
        />
        <Image
        src={'/images/prada.png'}
        width={100}
        height={100}
        alt='prada logo'
        className='sm:w-[194px] h-[32px] sm:gap-2'
        />
        <Image
        src={'/images/calvin klein.png'}
        width={100}
        height={100}
        alt='ck logo'
        className='sm:w-[207px] h-[33px] sm:gap-2'
        />
        
    </div>
  )
}


