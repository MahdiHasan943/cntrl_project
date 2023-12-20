import Image from 'next/image'
import { Lato } from 'next/font/google'
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display:'swap'
})
export default function Home() {
  return (
    <main className='py-20 h-full '>
      <h3 className={`${lato.className} text-primary text-[50px]`}>hello</h3>
 </main>
  )
}
