import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import commentsdata from '../comments.json';

import { ThemeProvider } from '../../my-project/src/theme/Themebtn';
import { FaGithub, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('show');
    }
  }, [inView]);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(commentsdata.comments);
  }, []);

  const arr = [
    '/cards/The_food_vendor.jpg',
    '/cards/The_project.jpg',
    '/cards/database.webp',
  ];
  const arr_link = [
    'https://github.com/kobbieno8/my_food_management',
    'https://github.com/kobbieno8/my_jave_project_management_teacher_and_student',
    'https://github.com/kobbieno8/my_database_project_with_documentation',
  ];

  return (
    <ThemeProvider>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delay: 0.2,
              staggerChildren: 0.25,
              when: 'beforeChildren',
            },
          },
        }}
        ref={ref}
        initial="hidden"
        animate={mainControls}
        className="flex flex-wrap justify-center gap-8 p-5 bg-gray-200 dark:bg-blacki"
      >
        {comments.map((com, index) => (
          <motion.div
            key={com.id}
            variants={{ hidden: { opacity: 0, y: -100 }, show: { opacity: 1, y: 0 } }}
            className="w-full sm:w-72 md:w-80 lg:w-96 xl:w-[22rem] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300"
          >
            <div className="group relative">
              <div className="overlay absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center">
                <a href={arr_link[index]} target="_blank" rel="noopener noreferrer">
                  <div className="h-12 w-12 border-2 rounded-full flex items-center justify-center text-white">
                    <FaGithub size={20} />
                  </div>
                </a>
              </div>
              <img
                className="w-full h-48 object-cover"
                src={arr[index]}
                alt="project screenshot"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <span className="font-bold text-lg text-gray-800 dark:text-white">
                {com.title}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-300">{com.short}</p>

              <div className="flex justify-between items-center pt-2">
                <Link
                  to={`/job/${com.id}`}
                  className="text-sm bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1.5 rounded-md"
                >
                  Read More
                </Link>

                <button className="flex items-center space-x-1 text-indigo-500 hover:text-indigo-700">
                  <FaThumbsUp />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ThemeProvider>
  );
};

export default Card;
