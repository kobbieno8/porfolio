import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import commentsdata from '../comments.json';
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
    '/cards/kingdom.png',
    '/cards/soc.jpg',
    '/cards/km.png'
  ];
  const arr_link = [
    'https://github.com/kobbieno8/my_food_management',
    'https://github.com/kobbieno8/my_jave_project_management_teacher_and_student',
    'https://github.com/kobbieno8/my_database_project_with_documentation',
    'https://github.com/Kdus17/Distributer_website',
    'https://github.com/kobbieno8/pfsense-suricata-wazuh-soc-lab',
    'https://github.com/kobbieno8/knowledge-management'
  ];

  return (
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
        className="flex flex-wrap justify-center gap-8 p-5 bg-gray-200 dark:bg-darkBg"
      >
        {comments.map((com, index) => (
          <motion.div
            key={com.id}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.95 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 80, damping: 16 }
              }
            }}
            className="w-full sm:w-72 md:w-80 lg:w-96 xl:w-[22rem] bg-white dark:bg-darkSurface dark:border dark:border-white/5 rounded-lg shadow-md dark:shadow-indigo-950/30 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:hover:border-indigo-500/40 dark:hover:shadow-indigo-900/40"
          >
            <div className="group relative">
              <div className="overlay absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center">
                <a href={arr_link[index]} target="_blank" rel="noopener noreferrer">
                  <div className="h-12 w-12 border-2 rounded-full flex items-center justify-center text-white bg-white/20 hover:bg-white/40 transition-all duration-300">
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
              <p className="text-sm text-gray-600 dark:text-gray-400">{com.short}</p>

              <div className="flex justify-between items-center pt-2">
                <Link
                  to={`/job/${com.id}`}
                  className="text-sm bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1.5 rounded-md"
                >
                  Read More
                </Link>

                <button className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300">
                  <FaThumbsUp />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
  );
};

export default Card;
