import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import { ThemeProvider } from '../../my-project/src/theme/Themebtn';
import pic1 from '../images/testimonial/headshot.jpg';
import kidus from '../images/testimonial/kidus.jpg';
import leul from '../images/testimonial/leul.jpg';
import surafel from '../images/testimonial/surafel.jpg';

const My_testimonial = () => {
  const testimonials = [
    {
      img: leul,
      content_text: "Abel is great at teamwork, definitely has a bright future ahead in the field of programming and coding.",
      testimonial_name: "Leul Eyasu",
      testimonial_worker: "Group member",
    },
    {
      img: kidus,
      content_text: "Versatile in many programming languages, Abel would be a very good asset to any group or organization that would employ his skills.",
      testimonial_name: "Kidus Gebremichael",
      testimonial_worker: "Fellow IS student",
    },
    {
      img: surafel,
      content_text: "Has good leadership skills and remarkable adaptability. Abel is certainly one of the best group leaders I have ever had.",
      testimonial_name: "Surafel Habtewold",
      testimonial_worker: "Group member",
    },
    {
      img: pic1,
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
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <ThemeProvider>
      <div className="dark:bg-blacki dark:text-white bg-gray-200 min-h-screen flex justify-center items-center p-4">
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
                  className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-4 text-center"
                >
                  <img
                    src={item.img}
                    alt={item.testimonial_name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600"
                  />
                  <div>
                    <p className="font-semibold text-lg md:text-xl">{item.testimonial_name}</p>
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-300">{item.testimonial_worker}</p>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-200">{item.content_text}</p>
                  <div className="flex gap-6 mt-4">
                    <button
                      onClick={prev}
                      className="px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-full"
                    >
                      &#x3c;
                    </button>
                    <button
                      onClick={next}
                      className="px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-full"
                    >
                      &#x3e;
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )
        )}
      </div>
    </ThemeProvider>
  );
};

export default My_testimonial;
