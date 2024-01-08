import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Header} from "../components/header"
import {Main} from "../components/main"
import {About} from '../components/About'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Work } from '@/components/Work'
import { Contact } from '@/components/Contact'
import { Fooder } from '@/components/Fooder'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Header/>
    <Main/>
    <About/>
    <Skills/>
    <Experience/>
    <Work/>
    <Contact/>
    <Fooder/>
  </div>
    
  )
}
