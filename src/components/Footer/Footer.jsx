import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/routes.js";
import { handleClick } from "../../common/helpers.js";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <footer className="bg-[url(/footerBg.jpg)] bg-no-repeat bg-cover">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                    <div>
                        <img src="/logo.png" alt="logo" className='size-32'/>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold uppercase">
                            О компании
                        </h2>
                        <ul className="font-medium">
                            <li className="mb-4">
                                <NavLink to={ROUTES.HOME} className="hover:underline"
                                         onClick={() => { handleClick(); openModal(); }}>
                                    Здоровье груди
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.PMS_MASTOPATHY} className="hover:underline"
                                         onClick={() => { handleClick(); openModal(); }}>
                                    ПМС и мастопатия
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.ABOUT_MASTOPATHY} className="hover:underline"
                                         onClick={() => { handleClick(); openModal(); }}>
                                    О мастопатии
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.ULTRASOUND_DIAGNOSTICS} className="hover:underline"
                                         onClick={() => { handleClick(); openModal(); }}>
                                    Диагностика УЗИ
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.SURVEY_FOR_CONSULTATION} className="hover:underline"
                                         onClick={() => { handleClick(); openModal(); }}>
                                    Опрос для консультации
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Conditional rendering of the modal */}
            {isModalOpen && <ModalWindow closeModal={closeModal} />}
        </footer>
    );
};

export default Footer;
