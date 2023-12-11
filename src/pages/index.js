import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Header} from "../components/header"
import {Main} from "../components/main"
import {About} from '../components/About'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <Header/>
    <Main/>
    <About/>
    <Skills/>
    <Experience/>

   </>
  )
}
