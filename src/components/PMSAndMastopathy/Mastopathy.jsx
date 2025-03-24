import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Mastopathy = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.2 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <div>
            <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="container mx-auto h-full md:h-96 flex flex-col md:flex-row justify-between items-center gap-10 p-4"
            >
                <h2 className="text-2xl text-center md:w-1/2 font-semibold text-gray-800 mb-4">
                    Что такое предменструальный мастопатический синдром?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    — это состояние, при котором у женщин перед началом менструации появляются боль, набухание и
                    повышенная чувствительность груди. Оно связано с регулярными гормональными изменениями в организме и
                    является одним из частых проявлений предменструального синдрома.
                </p>
            </motion.div>

            <div className="">
                <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 p-4"
                >
                    <h2 className="text-2xl text-center md:w-full font-semibold text-gray-800 mb-4">
                        Механизмы возникновения ПМС-мастопатии
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Основная причина болезненности молочных желез перед месячными — гормональный дисбаланс. Во второй половине
                        цикла эстрогенов становится больше, а прогестерона меньше, из-за чего происходит застой жидкости в тканях
                        молочной железы. В результате этого грудь становится отёчной, болезненной, чувствительной к прикосновениям
                        и увеличивается в размерах. Симптомы обычно усиливаются за 7-10 дней до начала менструации и уменьшаются
                        или исчезают с её началом.
                    </p>
                </motion.div>
                <motion.div
                    ref={ref3}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="bg-gray-100 p-4 rounded-lg mt-10"
                >
                    <div className='container mx-auto text-center py-10'>
                        <p className="text-lg font-semibold text-gray-800">Интересный факт:</p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Около 70-80% женщин в репродуктивном возрасте испытывают ту или иную степень болезненности груди перед
                            месячными.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Mastopathy;