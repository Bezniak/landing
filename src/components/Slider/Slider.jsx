import React from "react";
import {motion} from "framer-motion";

const text = "Что должна знать каждая женщина, чтобы следить за здоровьем молочных желез";

const Slider = () => {
    return (
        <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center">
            {/* Анимированное изображение */}
            <motion.img
                src="/homeImg.jpg"
                alt="background slide"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{scale: 2}}
                animate={{scale: [1, 1.05, 1]}}
                transition={{duration: 9, repeat: Infinity, ease: "easeInOut"}}
            />

            {/* Анимированный заголовок */}
            <motion.h1
                className="relative leading-18 z-10 text-black text-3xl md:text-5xl text-center w-[90%] mx-auto"
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