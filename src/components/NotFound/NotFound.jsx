import React from 'react';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";

const NotFound = () => {

    return (
        <div className='dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <div className='h-screen flex flex-col items-center justify-center'>
                <h1 className='text-4xl mb-10'>
                    Страница не найдена
                </h1>
                <NavLink to={ROUTES.HOME}
                         className='w-fit text-center border border-black py-3 px-6 rounded hover:bg-black hover:text-white transition dark:hover:bg-white dark:hover:text-black dark:border-white'
                >
                   на главную
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;