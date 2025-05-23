import React from "react";
import {motion} from "framer-motion";

const text = "Что должна знать каждая женщина, чтобы следить за здоровьем молочных желез";

const Slider = () => {
    return (
        <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center">
            {/* Анимированное изображение */}
            <motion.img
                src="/lycomat_1.png"
                alt="здоровье молочных желез"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{scale: 2}}
                animate={{scale: [1, 1.05, 1]}}
                transition={{duration: 9, repeat: Infinity, ease: "easeInOut"}}
            />

            {/* Анимированный заголовок */}
            <motion.h1
                className="relative z-10 text-white text-3xl md:text-6xl text-center w-[75%] mx-auto"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2}}
            >
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.6, delay: index * 0.05}}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default Slider;