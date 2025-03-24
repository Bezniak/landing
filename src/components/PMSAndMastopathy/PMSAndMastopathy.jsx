import React from 'react';
import {motion} from "framer-motion";
import Mastopathy from "./Mastopathy.jsx";
import PmsMastopathyDiagnosis from "./PmsMastopathyDiagnosis.jsx";
import BreastPainTreatment from "./BreastPainTreatment.jsx";

const PmsAndMastopathy = () => {
    return (
        <div>
            <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center">
                {/* Анимированное изображение */}
                <motion.img
                    src="/bg-pms.jpg"
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
                    Болезненность в молочных железах как проявление предменструального мастопатического синдрома
                </motion.h1>
            </div>
            <Mastopathy/>
            <PmsMastopathyDiagnosis/>
            <BreastPainTreatment/>
        </div>
    );
};

export default PmsAndMastopathy;