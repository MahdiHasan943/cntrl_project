import { contents } from '@/utils/infos'
import Image from 'next/image'
import React from 'react'

const Content = () => {
  return (
      <div className='grid grid-cols-1 py-20 laptop:grid-cols-2 w-full justify-center  '>
          
          <div className="">
              {
                  contents.map(content => (
                      <div className="flex justify-center items-start gap-4 tablet:gap-10 py-4">
                          <div className="min-w-[50px]">
                          <Image src={content.img} width={22} height={10} alt={content.title} />

                          </div>
                          <div className="">
                              <h2 className='text-[28px] font-bold text-[#fff]'>{content.title}</h2>
                              <p className='text-white overflow-hidden tablet:w-[500px]'>{content.des}</p>
                          </div>
                  </div>
              ))    
              }
          </div>
          {/* contact form */}
          <div className="">
          <form action="" className='bg-[#3185FF] laptop:w-[500px] h-[500px] rounded-lg py-4 px-4 '>
                  <div className="">
                      <Image></Image>
             </div>
              
             </form>
         </div>

    </div>
  )
}

export default Content