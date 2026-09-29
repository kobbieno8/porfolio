import { useState } from "react";

const Toggle_btn = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const html = document.querySelector('html');
    if (isDark) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
    setIsDark(!isDark);
  };

  return (
    <div
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 ${
        isDark ? 'bg-indigo-600' : 'bg-gray-400'
      }`}
    >
      <div
        className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
          isDark ? 'translate-x-8' : 'translate-x-1'
        }`}
      />
    </div>
  );
};

export default Toggle_btn