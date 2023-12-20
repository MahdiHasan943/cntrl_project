import Image from 'next/image'
import { Lato } from 'next/font/google'
import Hero from '@/components/Hero/Hero'
import Content from '@/components/Content/Content'
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display:'swap'
})
export default function Home() {
  return (
    <main className={`${lato.className} py-20  relative px-4 sm:px16  mx-auto bg-[#000] h-[2000px] w-full`} >
      <div className="absolute  w-full h-full  main_bg"></div>
      <div className="absolute  top-0  z-50 w-full h-full left-0 ">
      <section  >
              {/* hero  section*/}
        <Hero />
      </section>
      {/* section for paragraps and form */}
      <section>
        <Content/>
 </section>
     
 </div>
        
      
    </main>
  )
}
