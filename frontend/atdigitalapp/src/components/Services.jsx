import { motion } from "framer-motion"
import { assets } from '../assets/assets'

export default function Services() {
  return (
   <motion.div
    
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}

      className='flex flex-col lg:flex-row items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden gap-10 lg:gap-20' id='Services'>
      
      {/* Image on left side */}
      <div className='flex-1'>
        <img src={assets.desktop} alt="Web & Mobile Development" className='w-full max-w-md mx-auto'></img>
      </div>

      {/* Content on right side */}
      <div className='flex-1 flex flex-col items-start'>
        <h2 className='text-[#6A44F2] text-2xl md:text-3xl font-semibold mb-6'>
          Web & Mobile App Development
        </h2>
        
        <p className='text-gray-700 text-base leading-relaxed mb-8'>
          Your web and mobile Apps are pieces of the puzzle to grow your <br/> business. We use frameworks which tailor content and engagement<br/> methods to respond to different intents shown by your potential <br/> customers who interact with your business online.
        </p>
        
        <button className='bg-[#F28D35] px-8 py-3 text-white font-medium hover:bg-[#e07c2a] transition-colors duration-300'>
          LEARN MORE
        </button>
      </div>

    </motion.div>
  )
}