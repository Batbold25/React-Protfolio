import React from 'react'

export const Header = () => {
  return (
    <header className='w-screen h-fit flex justify-center mt-4'>
      <div className='w-5/6 flex items-center'>
        <div className='w-1/2'>
          <img src="/NEG.png" height={30} />
        </div>
        <div className=' w-1/2 flex justify-end gap-8 items-center' >
          <div className='flex gap-6 text-base font-medium text-slate-500'>
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
          <div className='flex gap-4 items-center'>
            <img src='/nar.png' width={36}/>
            <p className='py-1 px-4 font-medium leading-6 bg-slate-950 text-white rounded-xl'>Download CV</p>
          </div>
        </div>
      </div>
    </header>
  )
}
