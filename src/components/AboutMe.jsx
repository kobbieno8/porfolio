import checkmark from '../images/checkmark/checkmark.png';
import CountUp from 'react-countup';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AboutMe = () => {
  const ref = useRef();
  const inview = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inview) {
      mainControls.start("animate");
    }
  }, [inview]);

  const var1 = {
    hidden: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };
  const var2 = {
    hidden: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section id="abtme" className="bg-gray-200 dark:bg-gray-950 pb-10 transition-colors duration-300">
       
        <div className="mx-4 sm:mx-8 md:mx-16 pt-16 px-2 flex flex-wrap justify-center gap-4 md:gap-6">
          {[
            { count: 4, label: "projects completed" },
            { count: 3, label: "years of experience" },
            { count: 8, label: "apps mastered" },
            { count: 4, label: "languages proficient" }
          ].map(({ count, label }, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-black dark:bg-darkElevated dark:border dark:border-indigo-500/30 p-4 rounded-2xl border-l-4 border-indigo-500 text-white"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white">
                <CountUp end={count} duration={5} delay={2} enableScrollSpy scrollSpyOnce />
              </p>
              <div className="mt-1 text-sm sm:text-base text-gray-300 dark:text-indigo-200">{label}</div>
            </div>
          ))}
        </div>

       
        <div className="mx-4 sm:mx-8 md:mx-16 mt-10 flex flex-col md:flex-row gap-6">
         
          <motion.div
            variants={var1}
            ref={ref}
            initial="hidden"
            animate={mainControls}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gray-100 dark:bg-darkSurface dark:border dark:border-indigo-500/20 dark:shadow-lg dark:shadow-indigo-950/40 w-full md:w-1/2 p-5 space-y-5 shadow-lg rounded-xl"
          >
            <span className="text-2xl font-semibold dark:text-white">Front end development</span>
            <article className="space-y-4">
              {[
                { skill: "HTML", level: "80%" },
                { skill: "CSS", level: "70%" },
                { skill: "JavaScript", level: "50%" }
              ].map(({ skill, level }, i) => (
                <div className="flex items-center space-x-3" key={skill}>
                  <img src={checkmark} alt="checkmark" />
                  <div className="w-full">
                    <span className="font-bold capitalize dark:text-gray-200">{skill}</span>
                    <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                      <motion.div
                        className="bg-indigo-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inview ? { width: level } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </article>
          </motion.div>

          <motion.div
            variants={var2}
            ref={ref}
            initial="hidden"
            animate={mainControls}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gray-100 dark:bg-darkSurface dark:border dark:border-indigo-500/20 dark:shadow-lg dark:shadow-indigo-950/40 w-full md:w-1/2 p-5 space-y-5 shadow-lg rounded-xl"
          >
            <span className="text-2xl font-semibold dark:text-white">Back end development</span>
            <article className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { skill: "C++", level: "65%" },
                { skill: "Java", level: "65%" },
                { skill: "C#", level: "40%" },
                { skill: "SQL", level: "90%" }
              ].map(({ skill, level }, i) => (
                <div className="flex items-center space-x-3" key={skill}>
                  <img src={checkmark} alt="checkmark" />
                  <div>
                    <span className="font-bold dark:text-gray-200">{skill}</span>
                    <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                      <motion.div
                        className="bg-indigo-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inview ? { width: level } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </article>
          </motion.div>
        </div>
      </section>
  );
};

export default AboutMe;
