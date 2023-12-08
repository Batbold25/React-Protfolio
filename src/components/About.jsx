import React from 'react'
import {Uba} from "../components/Svj-Photos/uba"

export const About = () => {
  return (
    <about className="w-screen flex justify-center py-24 px-20">
      <div className='w-4/5'>

        <button className=' w-28 h-7 bg-gray-200 text-slate-600 rounded flex items-center justify-center mb-12'>About me</button>

        <div >
            <div className=' w-28 flex flex-row gap-12 w-full'>

                <div className='w-1/2'>
                    <Uba/>
                </div>
                        
                <div className='w-1/2'>
                    <h1>Curious about me? Here you have it:</h1>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>

            </div>
            <div></div>
        </div>
      </div>
    </about>
  )
}
