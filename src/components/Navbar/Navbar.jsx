import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isSitesDropdownOpen, setIsSitesDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);


    // Закрытие меню при клике вне меню или прокрутке
    useEffect(() => {
        const handleClickOutside = (event) => {
            const mobileMenu = document.getElementById('mobile-dropdown');
            const sites = document.getElementById('sites-dropdown');
            const services = document.getElementById('services-dropdown');
            const languageMenu = document.getElementById('languageDropdown');

            if (mobileMenu && !mobileMenu.contains(event.target) && !event.target.closest('.mobile-toggle') && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
            if (sites && !sites.contains(event.target) && !event.target.closest('.sites-toggle') && isSitesDropdownOpen) {
                setIsSitesDropdownOpen(false);
            }
            if (services && !services.contains(event.target) && !event.target.closest('.services-toggle') && isServicesDropdownOpen) {
                setIsServicesDropdownOpen(false);
            }
            if (languageMenu && !languageMenu.contains(event.target) && !event.target.closest('.language-toggle') && isLanguageDropdownOpen) {
                setIsLanguageDropdownOpen(false);
            }
        };

        const handleScroll = () => {
            if (isMobileMenuOpen || isSitesDropdownOpen || isServicesDropdownOpen || isLanguageDropdownOpen) {
                setIsMobileMenuOpen(false);
                setIsSitesDropdownOpen(false);
                setIsServicesDropdownOpen(false);
                setIsLanguageDropdownOpen(false);
            }
        };

        // Добавляем слушатели событий
        document.addEventListener('click', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        // Убираем слушатели при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobileMenuOpen, isServicesDropdownOpen, isLanguageDropdownOpen, isSitesDropdownOpen]);

    return (
        <>
            <nav
                className="absolute z-50 bg-transparent top-0 left-1/2 transform -translate-x-1/2 border-gray-200 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className='flex gap-6 items-center !justify-between w-full md:w-fit'>
                        <NavLink to={ROUTES.HOME} className="flex flex-col items-center justify-center">
                            <img src="/logo.svg" alt="ЛикоМаст" className='size-18 md:size-32'/>
                        </NavLink>
                        <button
                            data-collapse-toggle="navbar-dropdown"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mobile-toggle"
                            aria-controls="navbar-dropdown"
                            aria-expanded="false"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`$ ${isMobileMenuOpen ? 'block' : 'hidden'} w-full py-5  md:block md:w-auto md:bg-transparent bg-white`}
                        id="mobile-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <NavLink
                                    to={ROUTES.BREAST_HEALTH}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block py-2 px-3 rounded md:border-0 md:p-0 text-black md:text-white hover:opacity-70"
                                >
                                    Здоровье груди
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={ROUTES.PMS_MASTOPATHY}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block py-2 px-3 rounded md:border-0 md:p-0 text-black md:text-white transition hover:opacity-70"
                                >
                                    ПМС и мастопатия
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={ROUTES.ABOUT_MASTOPATHY}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block py-2 px-3 rounded md:border-0 md:p-0 text-black md:text-white transition hover:opacity-70"
                                >
                                    О мастопатии
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={ROUTES.ULTRASOUND_DIAGNOSTICS}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block py-2 px-3 rounded md:border-0 md:p-0 text-black md:text-white transition hover:opacity-70"
                                >
                                    Диагностика УЗИ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={ROUTES.SURVEY_FOR_CONSULTATION}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block py-2 px-3 rounded md:border-0 md:p-0 text-black md:text-white transition hover:opacity-70"
                                >
                                    Опрос для консультации
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
