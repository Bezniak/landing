import React from 'react';
import TestForm from "../TestForm/TestForm.jsx";
import {motion} from "framer-motion";
import MetaTags from "../../common/MetaTags.jsx";

const SurveyForConsultation = () => {
    return (
        <div>
            {/*<MetaTags*/}
            {/*    title="Кому нужна консультация маммолога: пройдите опрос"*/}
            {/*    description="Заполните анкету, чтобы предварительно оценить необходимость консультации маммолога. Поможет определить риски и спланировать обследование."*/}
            {/*    keywords="маммолог, консультация врача, здоровье груди, рак молочной железы, УЗИ молочных желез, маммография, анкета, диагностика, профилактика"*/}
            {/*/>*/}

            <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center">
                {/* Анимированное изображение */}
                <motion.img
                    src="/bg-test.jpg"
                    alt="background slide"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{scale: 2}}
                    animate={{scale: [1, 1.05, 1]}}
                    transition={{duration: 9, repeat: Infinity, ease: "easeInOut"}}
                />

                {/* Анимированный заголовок */}
                <motion.h1
                    className="relative leading-18 z-10 text-white text-3xl md:text-5xl text-center w-[90%] mx-auto"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 2}}
                >
                    Кому нужна консультация врача - пройти опрос
                </motion.h1>
            </div>
            <TestForm/>
        </div>
    );
};

export default SurveyForConsultation;