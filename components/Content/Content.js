import { contents } from '@/utils/infos'
import Image from 'next/image'
import React from 'react'

const Content = () => {
  return (
      <div className='grid grid-cols-1 py-20 laptop:grid-cols-2 w-full justify-center  '>
          
          <div className="">
              {
                  contents.map(content => (
                      <div className="flex justify-center items-start gap-10 py-4">
                          <Image src={content.img} width={40} height={5} alt={content.title} />
                          <div className="">
                              <h2 className='text-[28px] font-bold text-[#fff]'>{content.title}</h2>
                              <p className='text-white overflow-hidden tablet:w-[500px]'>{content.des}</p>
                          </div>
                  </div>
              ))    
              }
          </div>
          {/* contact form */}
          <form action="">
              <p className='text-white'>kddkkd</p>
          </form>

    </div>
  )
}

export default Content