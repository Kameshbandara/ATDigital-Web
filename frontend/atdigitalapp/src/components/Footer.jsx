import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-[#4F46E5] overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>

        <div className='w-full md:w-1/3 mb-8 md:mb-0 flex-col gap-4 '>
          <img src={assets.logo} alt="Company logo" className="w-62 h-18"></img>
          <p className='text-white mt-4 text-sm'>Your goal is our target. Not anything in between. We use inline marketing platforms and tools to achieve single <br /> objective- your business results.</p>
        </div>
        
        <div className='flex flex-col md:flex-row gap-8 md:gap-40'>
          <div className='w-full md:w-auto mb-8 md:mb-0'>
            <h3 className='text-white text-xl font-bold mb-4 '>Our Technologies</h3>
            <ul className='flex flex-col gap-2 text-white'>
              <a href='#' className='hover:text-gray-400 text-sm'><li>ReactJS</li></a>
              <a href='#' className='hover:text-gray-400 text-sm'><li>Gatsby</li></a>
              <a href='#' className='hover:text-gray-400 text-sm'><li>NextJS</li></a>
              <a href='#' className='hover:text-gray-400 text-sm'><li>NodeJS</li></a>
            </ul>
          </div>
          
          <div className='w-full md:w-auto'>
            <h3 className='text-white text-xl font-bold mb-4'>Our Services</h3>
            <ul className='flex flex-col gap-2 text-white'>
              <a href='#' className='hover:text-gray-400 text-sm'><li>Social Media Marketing</li></a>
              <a href='#' className='hover:text-gray-400 text-sm'><li>Web & Mobile App <br /> Development</li></a>
              <a href='#' className='hover:text-gray-400 text-sm'><li>Data & Analytics</li></a>
            </ul>
          </div>
        </div>

      </div>
       <div className='border-t border-white/70 mt-12 pt-6 pb-6 text-white text-center mx-auto max-w-xl'>
        <div className='flex justify-center items-center gap-4 text-sm'>
          <a href='#' className='hover:text-gray-300'>Privacy Policy</a>
          <span className='text-white/60'>|</span>
          <a href='#' className='hover:text-gray-300'>Terms & Conditions</a>
        </div>
      </div>
      
    </div>
  )
}

export default Footer