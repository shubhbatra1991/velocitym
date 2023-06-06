import Image from 'next/image'
import HeroBg from '@/components/HeroBg'
import Book from '@/components/Book'
import PlanTrip from '@/components/PlanTrip'
import Fleet from '@/components/Fleet'
import MidBanner from '@/components/MidBanner'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Questions from '@/components/Questions'
import Download from '@/components/Download'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "...font-mont",
  weight: ['400', '700'],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${montserrat.variable} font-mont bg-white`}
    >
      <HeroBg />
      <Book />
      <PlanTrip />
      <Fleet />
      <MidBanner />
      <WhyUs />
      <Testimonials />
      <Questions />
      <Download />    
    </main>
  )
}
