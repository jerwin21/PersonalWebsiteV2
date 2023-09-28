import Image from 'next/image'

export default function Home() {
  return (
   <section>
    <div className='flex flex-col justify-center'>
        <div className='flex flex-col justify-start items-center'>
          <Image
            className='mb-10'
            src='/assets/JohnErwinHello.png'
            alt='John Erwin says Hello!'
            width={700}
            height={200}
          />

          <h1 className='text-center text-4xl'>
          My name is <span className='text-6xl'>John Erwin</span>. I'm a software engineer living in Boulder, CO. <br/>
          <span className='text-5xl'>Thanks for checking out my site! </span><br/>
          From here, you can look at some of the 
            <a href='/projects' className='blue_gradient text-6xl'> projects </a>
          I'm proud of,<br/>
          a little bit about my 
            <a href='/workschool' className='blue_gradient text-6xl'> work & school </a>
          experience, <br/>
          and learn <a href='/about' className='blue_gradient text-6xl'> about </a> me from a more personal perspective.<br/>
          </h1>
        </div>
    </div>
   </section>
  )
}
