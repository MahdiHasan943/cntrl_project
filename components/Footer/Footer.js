import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center gap-4'>
              <Link href={'/'}><Image src={'/images/CntrlLogo.png'} width={100} height={100} alt="cntrl_logo" /></Link>
           <p className='text-[#fff] text-[14px] '>All rights Reserved.</p>
    </div>
  )
}

export default Footer