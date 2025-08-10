import { motion } from "framer-motion"
import { assets } from '../assets/assets'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex flex-col w-full overflow-hidden relative' 
         style={{ backgroundImage: `url(${assets.header})` }}>
      
      <Navbar />
      
      {/* Main content container */}
      <div className='flex-1 relative'>
        {/* Desktop: Box positioned at bottom left with gaps */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className='hidden lg:block absolute bottom-8 left-15 max-w-2xl xl:max-w-3xl'
        >
          <div className='bg-gradient-to-r from-green-400 to-[#1CBDDD] p-8 pr-16 shadow-xl'>
            <h2 className='text-white text-3xl xl:text-4xl font-bold leading-tight mb-6' style={{width: 'fit-content'}}>
              We Crush Your <br /> Competitors, Goals, And <br /> Sales Records - Without <br /> The B.S.
            </h2>
            <button className='text-white font-semibold px-6 py-3 transition-colors duration-300 w-full sm:w-auto' style={{backgroundColor: '#F28D35'}}>
              GET FREE CONSULTATION
            </button>
          </div>
        </motion.div>

        {/* Mobile/Tablet*/}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className='lg:hidden absolute -bottom-20 left-4 right-4 z-10'
        >
          <div className='bg-gradient-to-r from-green-400 to-[#1CBDDD] p-6 pr-12 shadow-xl mx-auto max-w-xl'>
            <h2 className='text-white text-2xl sm:text-3xl font-bold leading-tight mb-4' style={{width: 'fit-content'}}>
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h2>
            <button className='text-white font-semibold px-6 py-3 transition-colors duration-300 w-full sm:w-auto' style={{backgroundColor: '#F28D35'}}>
              GET FREE CONSULTATION
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header