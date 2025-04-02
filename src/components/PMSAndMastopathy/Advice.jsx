import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Parallax} from "react-scroll-parallax";

const Advice = () => {
    const {ref, inView} = useInView({triggerOnce: false, threshold: 0.2});

    return (
        <div className=" my-10 md:my-20">
            <div className="relative min-h-screen flex items-center justify-start p-4 overflow-hidden py-10">
                <Parallax speed={-20} className="absolute inset-0 w-full h-full">
                    <img src="/lycomat_30.png" alt="Background" className="w-full h-full object-cover"/>
                </Parallax>
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    className="container mx-auto p-5 z-10 flex flex-col justify-start items-start"
                >
                    <h2 className="text-2xl md:text-4xl mb-6 md:mb-10">
                        Дополнительные полезные советы и интересные факты:
                    </h2>
                    <ul className="space-y-4 text-base md:text-lg text-gray-500">
                        <motion.li
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                            className="mb-5"
                        >
                            <strong className='font-semibold'>
                                Холодный компресс:
                            </strong> &nbsp;
                            если теплая процедура не помогает, попробуйте приложить к груди прохладный компресс или
                            пакет со льдом, завернутый в полотенце.
                        </motion.li>
                        <motion.li
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.4}}
                            className="mb-5"
                        >
                            <strong className='font-semibold'>
                                Витамин D:
                            </strong> &nbsp;
                            дефицит витамина D может усиливать проявления ПМС-мастопатии, поэтому полезно контролировать
                            его уровень и при необходимости принимать дополнительно.
                        </motion.li>
                        <motion.li
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.6}}
                            className="mb-5"
                        >
                            <strong className='font-semibold'>
                                Масло примулы вечерней:
                            </strong> &nbsp;
                            употребление этого масла показало хороший эффект при снижении симптомов мастопатии.
                        </motion.li>
                        <motion.li
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.8}}
                            className="mt-6"
                        >
                            <strong className='text-[var(--green)] font-semibold'>
                                Полезный факт:
                            </strong>
                            исследования показывают, что стресс значительно усиливает болезненность в груди, поэтому
                            регулярное снятие стресса (медитация, дыхательные практики) крайне важно.
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
            <p className="bg-gradient-to-r py-20 flex justify-center items-center text-center from-red-900 to-red-700 text-white p-5 relative overflow-hidden">
                ПМС-мастопатия не является опасным заболеванием, но значительно влияет на качество жизни. Поэтому
                регулярное наблюдение и консультации специалистов помогут своевременно выявить любые отклонения и
                подобрать оптимальный подход к лечению и профилактике.
            </p>
        </div>
    );
};

export default Advice;
