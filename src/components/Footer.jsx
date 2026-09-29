import github from '../images/github.png'
import twit from '../images/darkmode/twitter .png'
import twitter from '../images/twitter.png'

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 border-t border-gray-300 dark:border-gray-800 flex flex-col items-center justify-center py-8 gap-4 transition-colors duration-300">
      <div>
        <span className="text-gray-500 dark:text-indigo-300 block text-center text-sm">
          copyright &copy; Abel Gulbet — All rights reserved
        </span>
      </div>
      <div className="flex flex-row space-x-5">
        <a href="https://github.com/" className="hover:opacity-70 transition-opacity">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/" className="hover:opacity-70 transition-opacity">
          <img src={twit} alt="LinkedIn" />
        </a>
        <a href="https://x.com/AGulbet23174" className="hover:opacity-70 transition-opacity">
          <img src={twitter} alt="Twitter" />
        </a>
      </div>
    </div>
  )
}

export default Footer