import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const Description = () => {
    const {ref, inView} = useInView({
        triggerOnce: false, // Trigger only once when the element comes into view
        threshold: 0.8, // The element should be at least 50% visible
    });

    return (
        <div
            ref={ref}
            className="bg-[url(/lycomat_2.png)] bg-no-repeat bg-contain py-10 md:h-screen bg-center md:bg-right flex items-center justify-center md:justify-end p-5 overflow-hidden"
        >
            <div className='p-5'>
                <h2 className='text-4xl mb-10 text-left'>
                    Здоровье молочных желез
                </h2>
                <motion.p
                    className="text-lg md:pr-10 w-full md:w-1/2 text-center md:text-left mb-5"
                    initial={{x: 100, opacity: 0}}
                    animate={{
                        x: inView ? 0 : 100, // Animate when the component is in view
                        opacity: inView ? 1 : 0, // Fade in when the component is in view
                    }}
                    transition={{duration: 1}}
                >
                    Важная составляющая женского здоровья в любом возрасте. По данным Всемирной организации
                    здравоохранения, рак груди является одним из самых распространённых онкологических заболеваний среди
                    женщин во всём мире.
                </motion.p>
                <motion.p
                    className="text-lg md:pr-10 w-full md:w-1/2 text-center md:text-left mb-5"
                    initial={{x: 100, opacity: 0}}
                    animate={{
                        x: inView ? 0 : 100, // Animate when the component is in view
                        opacity: inView ? 1 : 0, // Fade in when the component is in view
                    }}
                    transition={{duration: 1}}
                >
                    Однако при своевременном выявлении и правильном лечении многие патологии груди, включая
                    злокачественные образования, могут эффективно контролироваться. Ниже приведена подробная информация,
                    которая поможет каждой женщине лучше понимать устройство молочных желез, осознавать факторы риска и
                    распознавать ранние симптомы возможных нарушений.
                </motion.p>
                <motion.p
                    className="text-lg md:pr-10 w-full md:w-1/2 text-center md:text-left"
                    initial={{x: 100, opacity: 0}}
                    animate={{
                        x: inView ? 0 : 100, // Animate when the component is in view
                        opacity: inView ? 1 : 0, // Fade in when the component is in view
                    }}
                    transition={{duration: 1}}
                >
                    Ниже приведена подробная информация, которая поможет каждой женщине лучше понимать устройство
                    молочных желез, осознавать факторы риска и распознавать ранние симптомы возможных нарушений.
                </motion.p>
            </div>
        </div>
    );
};

export default Description;
