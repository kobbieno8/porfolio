import checkmark from '../images/checkmark/checkmark.png';
import CountUp from 'react-countup';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ThemeProvider } from '../../my-project/src/theme/Themebtn';

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
    <ThemeProvider>
      <section id="abtme" className="dark:bg-blacki bg-gray-200 pb-10">
       
        <div className="mx-4 sm:mx-8 md:mx-16 pt-16 px-2 flex flex-wrap justify-center gap-4 md:gap-6 dark:text-black">
          {[
            { count: 4, label: "projects completed" },
            { count: 3, label: "years of experience" },
            { count: 8, label: "apps mastered" },
            { count: 4, label: "languages proficient" }
          ].map(({ count, label }, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-black p-4 rounded-full text-white dark:text-black dark:bg-white"
            >
              <p className="text-3xl sm:text-4xl font-bold">
                <CountUp end={count} duration={5} delay={2} enableScrollSpy scrollSpyOnce />
              </p>
              <div className="mt-1 text-sm sm:text-base">{label}</div>
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
            className="bg-gray-100 w-full md:w-1/2 p-5 space-y-5 shadow-lg"
          >
            <span className="text-2xl font-semibold">Front end development</span>
            <article className="space-y-4">
              {[
                { skill: "HTML", level: "80%" },
                { skill: "CSS", level: "70%" },
                { skill: "JavaScript", level: "50%" }
              ].map(({ skill, level }) => (
                <div className="flex items-center space-x-3" key={skill}>
                  <img src={checkmark} alt="checkmark" />
                  <div>
                    <span className="font-bold capitalize">{skill}</span>
                    <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: level }}></div>
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
            className="bg-gray-100 w-full md:w-1/2 p-5 space-y-5 shadow-lg"
          >
            <span className="text-2xl font-semibold">Back end development</span>
            <article className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { skill: "C++", level: "65%" },
                { skill: "Java", level: "65%" },
                { skill: "C#", level: "40%" },
                { skill: "SQL", level: "90%" }
              ].map(({ skill, level }) => (
                <div className="flex items-center space-x-3" key={skill}>
                  <img src={checkmark} alt="checkmark" />
                  <div>
                    <span className="font-bold">{skill}</span>
                    <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: level }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </article>
          </motion.div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default AboutMe;
