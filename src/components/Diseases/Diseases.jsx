import React from 'react';
import {motion} from 'framer-motion';

const Diseases = () => {


    // Animation configuration for scaling and fading in
    const fadeInScale = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.6, ease: "easeOut"}},
    };

    return (
        <div>
            <div className='md:container mx-auto pt-20'>
                <motion.h2
                    className='text-4xl mb-10 text-center'
                    variants={fadeInScale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false}}
                >
                    Частые заболевания и нарушения:
                </motion.h2>
                <div className='flex flex-wrap justify-center'>
                    <motion.div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <img src="/img_2.jpg" alt="gal1"/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-[var(--light-green)]"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900">
                                Мастопатия (фиброзно-кистозная болезнь)
                            </h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                – доброкачественное состояние, характеризуется разрастанием соединительной ткани и
                                образованием кист. Может сопровождаться болевыми ощущениями и уплотнениями.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-[var(--light-green)] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <img src="/img_3.jpg" alt="gal2"/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-[var(--light-green)] dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Кисты
                            </h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                – полости, заполненные жидкостью, часто обнаруживаются случайно. Как правило, не опасны,
                                однако требуют наблюдения.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-[var(--light-green)] dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Фиброаденомы
                            </h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                – доброкачественные опухоли из железистой ткани. Обычно прощупываются как подвижные и
                                плотные «шарики».
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-[var(--light-green)] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <img src="/img_4.jpg" alt="gal3"/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-[var(--light-green)] dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Злокачественные опухоли (рак молочной железы)
                            </h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                – могут развиваться на фоне гормональных нарушений, генетической предрасположенности и
                                других факторов.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <img src="/img_5.jpg" alt="gal4"/>
                    </motion.div>
                </div>
                <p className='py-12 text-center'>
                    Своевременное выявление и лечение доброкачественных образований может предотвратить возможные
                    осложнения и снизить риск перерождения в злокачественные формы.
                </p>
            </div>
        </div>
    );
};

export default Diseases;