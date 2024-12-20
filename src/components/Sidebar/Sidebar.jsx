import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    const storedTheme = JSON.parse(localStorage.getItem('theme'));
    return storedTheme || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark', theme === 'dark');
    htmlElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  function handleOpportunities() {
    navigate('/opportunities');
  }

  return (
    <div className="ml-4 mt-4 h-full w-full  border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%] md:px-2 lg:h-[90vh]  xl:h-full">
      <div className="mb-2 flex h-12 w-full items-center gap-2.5 ">
        <div className="text-secondaryColor dark:text-white">
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </div>
        <a href="https://devdisplay.vercel.app/">
          <div
            className="flex  text-[2rem] font-bold
           md:text-[1.05rem] lg:text-[1.25rem] min-[1200px]:text-[1.75rem]  "
          >
            <p className="text-secondaryColor dark:text-white">Dev</p>
            <p className="text-textSecondary">Display</p>
          </div>
        </a>
        <div className="ml-auto">
          <button
            type="button"
            className="h-10 w-10 cursor-pointer rounded-lg border-2 border-borderSecondary bg-white transition-all hover:border-textSecondary hover:text-textSecondary dark:border-borderColor dark:bg-textPrimary dark:text-white dark:hover:border-textSecondary dark:hover:text-textSecondary"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            )}
          </button>
        </div>
      </div>
      <div className="text-secondaryColor dark:text-white">
        Open Source community where you can discover, connect, collab with skilled developers, share your ideas then
        build projects and also promote the project through this community.
      </div>
      <div className="justify-left flex flex-wrap items-center gap-2 pt-5 ">
        <a
          href="https://github.com/codeaashu/DevDisplay?tab=readme-ov-file#how-to-add-your-profile-"
          target="_blank"
          rel="noreferrer"
        >
          <button className="inline-block h-[40px] w-[150px] cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm text-white transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            Add your profile
          </button>
        </a>
        <a href="https://www.linkedin.com/company/devdisplay/" target="_blank" rel="noreferrer">
          <button className="inline-flex h-[40px] w-[150px] cursor-pointer items-center justify-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm text-white transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            <span>Connect</span>
            <FaLinkedin className="text-1xl text-black-600 ml-2 duration-300 hover:scale-125" />
          </button>
        </a>
      </div>
      <div className="justify-left flex flex-row flex-wrap items-center gap-2 py-1.5 text-center">
        <a href="https://ai.google.dev/competition/projects/helpmate-ai" target="_blank" rel="noreferrer">
          <button className="inline-flex h-[40px] w-[150px] cursor-pointer items-center justify-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm text-white transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            Spotlight
          </button>
        </a>
        <button
          onClick={handleOpportunities}
          className="text inline-flex h-[40px] w-[150px] cursor-pointer items-center justify-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm text-white transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white"
        >
          Opportunities Hub
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
