import { useState } from 'react'
import { QuestionData } from '../assets/assets'

function Question() {
  const [openIndex, setOpenIndex] = useState(0) // First question open by default

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className='container mx-auto py-16 px-6 md:px-20 lg:px-32'>
      {/* Title */}
      <h2 className='text-[#6A44F2] text-3xl md:text-4xl font-semibold text-center mb-12'>
        Frequently asked questions
      </h2>

      {/* FAQ Items */}
      <div className='max-w-4xl mx-auto space-y-4'>
        {QuestionData.map((item, index) => (
          <div key={index} className='bg-gray-100 rounded-lg p-4 border border-gray-100'>
            {/* Question */}
            <button
              onClick={() => toggleQuestion(index)}
              className='flex justify-between items-center w-full text-left py-2 focus:outline-none'
            >
              <h3 className={`text-lg md:text-xl font-medium ${
                openIndex === index ? 'text-[#6A44F2]' : 'text-black'
              }`}>
                {item.Question}
              </h3>
              
              {/* Toggle Icon */}
              <div className={`flex-shrink-0 ml-4 text-2xl font-bold ${
                openIndex === index ? 'text-[#6A44F2]' : 'text-black'
              }`}>
                {openIndex === index ? '−' : '+'}
              </div>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className='pt-3 pr-8'>
                <p className='text-gray-500 text-base leading-relaxed'>
                  {item.Answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question