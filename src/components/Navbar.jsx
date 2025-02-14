import { useEffect, useState } from "react";

function Navbar() {
    const [active, setActive] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    let menuActive = active ? "left-0" : "-top-full";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScroll(true);
                setActive(false);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    let scrollActive = scroll ? "bg-white shadow" : "py-0";

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault(); 
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(false); 
        }
    };

    return (
        <div className={`navbar sticky z-[9999] top-0 w-full transition-all ${scrollActive}`}>
            <div className="container mx-auto px-5 py-6 lg:px-8 lg:py-8">
                <div className="navbar-wrapper flex justify-between items-center">
                    <div className="navbar-block flex justify-between items-center gap-[7.5rem]">
                        <div className="logo max-w-[138px] lg:max-w-full flex items-center space-x-4">
                            <a href="#hero" onClick={(e) => handleSmoothScroll(e, "#hero")}>
                                <img src="logoNavbar.svg" alt="logo" />
                            </a>
                        </div>
                        <ul className={`flex gap-[52px] text-base font-medium text-neutral-500 fixed lg:static 2lg:bg-transparent 2lg:w-auto 2lg:h-full 2lg:translate-y-0 2lg:flex-row 2lg:shadow-none 2lg:p-0 2lg:m-0 2lg:transition-none ${menuActive} top-60 -translate-y-1/2 w-full flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-white transition-all`}>
                            <li>
                                <a href="#features" onClick={(e) => handleSmoothScroll(e, "#features")}>Features</a>
                            </li>
                            <li>
                                <a href="#plans" onClick={(e) => handleSmoothScroll(e, "#plans")}>Pricing</a>
                            </li>
                            <li>
                                <a href="#testimony" onClick={(e) => handleSmoothScroll(e, "#testimony")}>About Us</a>
                            </li>
                            <li>
                                <a href="#insight" onClick={(e) => handleSmoothScroll(e, "#insight")}>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-button-wrapper hidden lg:flex gap-[8px] text-base ml-auto">
                        <button className="h-[48px] px-[32px] py-[8px] gap-[8px] rounded-full border border-transparent hover:border-primary-500 text-primary-500 font-medium">
                            Sign In
                        </button>
                        <button className="h-[48px] px-[32px] py-[8px] gap-[8px] rounded-full bg-primary-500 text-white hover:bg-primary-300 font-medium">
                            Free Trial
                        </button>
                    </div>
                    <div>
                        <i className="ri-menu-line text-2xl lg:hidden block" onClick={handleClick}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
