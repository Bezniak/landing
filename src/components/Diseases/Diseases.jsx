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
                    Частые заболевания и нарушения
                </motion.h2>
                <div className='flex flex-wrap justify-center'>
                    <motion.div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <img src="/lycomat_4.png" alt="gal1"/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm !bg-[var(--light-green)]"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-left text-2xl font-bold tracking-tight text-gray-900">
                                Мастопатия (фиброзно-кистозная болезнь)
                            </h5>
                            <p className="mb-3 text-gray-700 ">
                                доброкачественное состояние, характеризуется разрастанием соединительной ткани и
                                образованием кист. Может сопровождаться болевыми ощущениями и уплотнениями.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm !bg-[var(--light-green)] border border-gray-200 rounded-lg shadow"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <img src="/lycomat_5.png" alt="gal2"/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm !bg-[var(--light-green)]"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-left text-2xl font-bold tracking-tight text-gray-900">
                                Кисты
                            </h5>
                            <p className="mb-3 text-gray-700">
                                полости, заполненные жидкостью, часто обнаруживаются случайно. Как правило, не опасны,
                                однако требуют наблюдения.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm !bg-[var(--light-green)]"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-left text-2xl font-bold tracking-tight text-gray-900">
                                Фиброаденомы
                            </h5>
                            <p className="mb-3 text-gray-700">
                                доброкачественные опухоли из железистой ткани. Обычно прощупываются как подвижные и
                                плотные «шарики».
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm !bg-[var(--light-green)] border border-gray-200 rounded-lg shadow"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <img src="/lycomat_5.png" alt="gal3"/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm !bg-[var(--light-green)]"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-left text-2xl font-bold tracking-tight text-gray-900">
                                Злокачественные опухоли (рак молочной железы)
                            </h5>
                            <p className="mb-3 text-gray-700">
                                могут развиваться на фоне гормональных нарушений, генетической предрасположенности и
                                других факторов.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        <img src="/lycomat_7.png" alt="gal4"/>
                    </motion.div>
                </div>
                <p className='py-5 text-center'>
                    Своевременное выявление и лечение доброкачественных образований может предотвратить возможные
                    осложнения и снизить риск перерождения в злокачественные формы.
                </p>
            </div>
        </div>
    );
};

export default Diseases;