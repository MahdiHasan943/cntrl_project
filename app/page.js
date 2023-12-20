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
    <main className={`${lato.className} py-20  relative px-4 sm:px16 bg-[#000] mx-auto h-full w-full`} >
      <div className="absolute top-0 w-full h-full left-0 main_bg"></div>
      <div className="absolute top-0 opacity-50 w-full h-full left-0 "></div>

      <section >
              {/* hero  section*/}
        <Hero />
      </section>
      {/* section for paragraps and form */}
      <section>
        <Content/>
 </section>
     
      
    </main>
  )
}
