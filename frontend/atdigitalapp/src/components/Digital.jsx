import { motion } from "framer-motion"
import { assets } from '../assets/assets'

export default function Digital() {
  return (
    <motion.div
    
    initial={{ opacity: 0, x: -200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}

      className='flex flex-col lg:flex-row items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden gap-2 lg:gap-4' id='About'>
      
      {/* Content on left side */}
      <div className='flex-1 flex flex-col items-start order-2 lg:order-1'>
        <h2 className='text-[#6A44F2] text-2xl md:text-3xl font-semibold mb-6'>
          Digital Strategy Consulting
        </h2>
        
        <p className='text-gray-700 text-base leading-relaxed mb-8'>
          Your digital strategy should complement the overall marketing strategy <br/> of the company. In online marketing, each component will never work in <br/> isolation and every business needs a different mix. We provide a clear<br/> concept and strategic overview to find the most efficient model for <br/> your business.
        </p>
        
        <button className='bg-[#F28D35] px-8 py-3 text-white font-medium hover:bg-[#e07c2a] transition-colors duration-300'>
          LEARN MORE
        </button>
      </div>

      {/* Image on right side */}
      <div className='flex-1 order-1 lg:order-2'>
        <img src={assets.digital} alt="Digital Marketing" className='w-full max-w-md mx-auto'></img>
      </div>

    </motion.div>
  )
}