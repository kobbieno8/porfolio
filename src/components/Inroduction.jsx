import pic from '../images/pic.jpg'
import github from '../images/github.png'
import linkden from '../images/linkden.png'
import twitter from '../images/twitter.png'
import { motion } from 'framer-motion'

const Inroduction = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 0.1, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className='flex dark:text-white flex-col-reverse md:flex-row justify-around pt-20 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-950 dark:to-gray-900 px-6 mx-auto md:space-y-0 transition-colors duration-300'>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className='flex flex-col mb-32 space-y-12 md:w-1/2'
      >

        <motion.h1
          variants={itemVariants}
          className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-gray-900 dark:text-white"
        >
          Hello, My name is Abel
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-sm text-lg text-center text-gray-700 dark:text-gray-300 md:text-left"
        >
          I am a university graduate in Information Systems with proficiency in various programming languages and hands-on training in cybersecurity.
        </motion.p>

        <motion.div variants={itemVariants} className='flex items-center space-x-10'>

          <button
            className="p-2 px-5 bg-black rounded-full dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white transition-colors duration-200"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/mycv.pdf';
              link.setAttribute('download', 'mycv.pdf');
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download CV
          </button>

          <div className='flex space-x-6'>
            <a href="https://github.com/" className="hover:opacity-70 transition-opacity">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://linkedin.com/" className="hover:opacity-70 transition-opacity">
              <img src={linkden} alt="LinkedIn" />
            </a>
            <a href="https://x.com/AGulbet23174" className="hover:opacity-70 transition-opacity">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>

        </motion.div>

      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-[240px] h-[300px] md:w-[280px] md:h-[350px] overflow-hidden rounded-[2rem] shadow-xl dark:ring-2 dark:ring-indigo-500/40"
      >
        <img
          src={pic}
          alt="mypic"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

    </div>
  )
}

export default Inroduction