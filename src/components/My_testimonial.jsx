import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { useState } from 'react';

const My_testimonial = () => {
  const testimonials = [
    {
      initials: "LE",
      content_text: "Abel is great at teamwork, definitely has a bright future ahead in the field of programming and coding.",
      testimonial_name: "Leul Eyasu",
      testimonial_worker: "Group member",
    },
    {
      initials: "KG",
      content_text: "Versatile in many programming languages, Abel would be a very good asset to any group or organization that would employ his skills.",
      testimonial_name: "Kidus Gebremichael",
      testimonial_worker: "Fellow IS student",
    },
    {
      initials: "SH",
      content_text: "Has good leadership skills and remarkable adaptability. Abel is certainly one of the best group leaders I have ever had.",
      testimonial_name: "Surafel Habtewold",
      testimonial_worker: "Group member",
    },
    {
      initials: "KA",
      content_text: "Abel is a very hard-working student who strives to improve every day. We all can learn so much from him.",
      testimonial_name: "Kidus Admasu",
      testimonial_worker: "Fellow IS student",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const length = testimonials.length;

  const prev = () => {
    setDirection(-1);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setDirection(1);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const variant = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 200 : -200,
    }),
    animate: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-950 min-h-screen flex justify-center items-center p-4 transition-colors duration-300">
      {testimonials.map(
        (item, index) =>
          index === current && (
            <AnimatePresence custom={direction} key={item.testimonial_name}>
              <motion.div
                key={item.testimonial_name}
                transition={{ ease: easeInOut, duration: 0.5 }}
                variants={variant}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                className="w-full max-w-xl bg-white dark:bg-gray-800 dark:border dark:border-indigo-500/20 dark:shadow-2xl rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-4 text-center"
              >
                {/* Initials Avatar */}
                <div className="w-20 h-20 rounded-full bg-indigo-500 dark:bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                  {item.initials}
                </div>
                <div>
                  <p className="font-semibold text-lg md:text-xl dark:text-white">{item.testimonial_name}</p>
                  <p className="text-sm md:text-base text-gray-500 dark:text-indigo-300">{item.testimonial_worker}</p>
                </div>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic">"{item.content_text}"</p>
                <div className="flex gap-6 mt-4">
                  <button
                    onClick={prev}
                    className="px-4 py-2 text-white bg-gray-500 dark:bg-indigo-900 dark:border dark:border-indigo-500/30 hover:bg-indigo-600 dark:hover:bg-indigo-700 rounded-full transition-colors duration-200"
                  >
                    &#x3c;
                  </button>
                  <button
                    onClick={next}
                    className="px-4 py-2 text-white bg-gray-500 dark:bg-indigo-900 dark:border dark:border-indigo-500/30 hover:bg-indigo-600 dark:hover:bg-indigo-700 rounded-full transition-colors duration-200"
                  >
                    &#x3e;
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )
      )}
    </div>
  );
};

export default My_testimonial;
