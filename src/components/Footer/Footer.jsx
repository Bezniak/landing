import React from 'react';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {handleClick} from "../../common/helpers.js";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="text-center grid grid-cols-1 gap- px-4 py-6">
                    <div>
                        <ul className="font-medium flex flex-wrap items-center justify-center gap-10 pt-10">
                            <li className="mb-4">
                                <NavLink to={ROUTES.HOME} className="hover:underline"
                                         onClick={() => {
                                             handleClick();
                                         }}>
                                    Здоровье груди
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.PMS_MASTOPATHY} className="hover:underline"
                                         onClick={() => {
                                             handleClick();
                                         }}>
                                    ПМС и мастопатия
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.ABOUT_MASTOPATHY} className="hover:underline"
                                         onClick={() => {
                                             handleClick();
                                         }}>
                                    О мастопатии
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.ULTRASOUND_DIAGNOSTICS} className="hover:underline"
                                         onClick={() => {
                                             handleClick();
                                         }}>
                                    Диагностика УЗИ
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.SURVEY_FOR_CONSULTATION} className="hover:underline"
                                         onClick={() => {
                                             handleClick();
                                         }}>
                                    Опрос для консультации
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='text-base mt-6'>
                        © {year}.
                        Все права защищены
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
