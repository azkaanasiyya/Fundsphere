/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';

function Navbar() {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const menuActive = active ? 'left-0' : '-left-full';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setActive(false);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollActive = scroll ? 'bg-white' : 'py-0';

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`navbar sticky top-0 z-[9999] w-full bg-white transition-all ${scrollActive}`}>
      <div className="container mx-auto max-w-[1280px] px-5 py-6 lg:px-8 lg:py-8">
        <div className="navbar-wrapper flex items-center justify-between">
          <div className="navbar-block flex items-center justify-between gap-[7.5rem]">
            <div className="logo flex max-w-[138px] items-center space-x-4 lg:max-w-full">
              <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')}>
                <img src="logoNavbar.svg" alt="logo" />
              </a>
            </div>
            <ul
              className={`fixed flex gap-[52px] text-base font-medium text-neutral-500 lg:static 2lg:m-0 2lg:h-full 2lg:w-auto 2lg:translate-y-0 2lg:flex-row 2lg:bg-transparent 2lg:p-0 2lg:shadow-none 2lg:transition-none ${menuActive} top-60 w-full -translate-y-1/2 flex-col rounded bg-primary-300 px-8 py-6  transition-all`}
            >
              <li className="relative">
                <button onClick={toggleDropdown} className="flex items-center gap-1 transition hover:text-primary-500">
                  Features <i className="ri-arrow-down-s-line"></i>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-md">
                    <li>
                      <a href="#feature1" className="block px-4 py-2 hover:bg-gray-100">
                        Feature 1
                      </a>
                    </li>
                    <li>
                      <a href="#feature2" className="block px-4 py-2 hover:bg-gray-100">
                        Feature 2
                      </a>
                    </li>
                    <li>
                      <a href="#feature3" className="block px-4 py-2 hover:bg-gray-100">
                        Feature 3
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#plans" className="hover:text-primary-500" onClick={(e) => handleSmoothScroll(e, '#plans')}>
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimony"
                  className="hover:text-primary-500"
                  onClick={(e) => handleSmoothScroll(e, '#testimony')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#insight"
                  className="hover:text-primary-500"
                  onClick={(e) => handleSmoothScroll(e, '#insight')}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-button-wrapper ml-auto hidden gap-[8px] text-base lg:flex">
            <button className="h-[48px] gap-[8px] rounded-full border border-transparent px-[32px] py-[8px] font-medium text-primary-500 hover:border-primary-500">
              Sign In
            </button>
            <button className="h-[48px] gap-[8px] rounded-full bg-primary-500 px-[32px] py-[8px] font-medium text-white hover:bg-primary-300">
              Free Trial
            </button>
          </div>
          <div>
            <i className="ri-menu-line block text-2xl lg:hidden" onClick={handleClick}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
