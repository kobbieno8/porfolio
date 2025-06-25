import { NavLink, Link } from "react-router-dom";
import { ThemeProvider } from "../../my-project/src/theme/Themebtn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Toggle_btn from "./Toggle_btn";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [themeMode, setThemeMode] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  const darkTheme = () => setThemeMode('dark');
  const lightTheme = () => setThemeMode('light');

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  const navLinkClass = "hover:text-darkGrayishBlue text-black dark:text-gray-200";

  const var1 = {
    hidden: { opacity: 1, x: 400 },
    visible: {
      opacity: 1,
      x: 1,
      transition: { delay: 0.2 },
    },
  };

  const var2 = {
    hidden: { opacity: 1, x: -200 },
    visible: {
      opacity: 1,
      x: 1,
      transition: { delay: 0.2 },
    },
  };

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <nav className="w-full bg-gray-200 dark:bg-blacki dark:text-gray-400 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            variants={var1}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl font-bold"
          >
            <Link to="/">Abel.</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={var2}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Toggle_btn />
            <NavLink to="/MyProjects" className={navLinkClass}>Previous Work</NavLink>
            <NavLink to="/Contactme" className={navLinkClass}>Contact Me</NavLink>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col items-center space-y-4 mt-4"
          >
            <Toggle_btn />
            <NavLink to="/MyProjects" className={navLinkClass} onClick={() => setMenuOpen(false)}>Previous Work</NavLink>
            <NavLink to="/Contactme" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact Me</NavLink>
          </motion.div>
        )}
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
