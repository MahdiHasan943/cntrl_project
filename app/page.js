import Image from 'next/image'
import { Lato } from 'next/font/google'
import Hero from '@/components/Hero/Hero'
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display:'swap'
})
export default function Home() {
  return (
    <main className={`${lato.className} py-20 px-4 sm:px16 mx-auto h-full w-full`} >
      <section>
              {/* hero  section*/}
        <Hero />
      </section>
      {/* section for paragraps and form */}
      <section>
        
 </section>
      
    </main>
  )
}
