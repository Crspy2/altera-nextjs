import { Inter } from 'next/font/google'
import { Features, Purchase, Services } from '@/components'
import Header from '@/components/Header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-black">
      <div>
        <Header/>
      </div>
      <section id="features" className='-mt-10 -pt-10'>
        <Features />
      </section>
      <section id="services" className="pt-0 -mt-0 md:-mt-48 md:pt-56">
        <Services />
      </section>
      <section id="purchase" className="">
        <Purchase />
      </section>
    </main>
  )
}
