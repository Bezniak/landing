import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const BreastPainTreatment = () => {
    const {ref: ref1, inView: inView1} = useInView({triggerOnce: false, threshold: 0.2});
    const {ref: ref2, inView: inView2} = useInView({triggerOnce: false, threshold: 0.2});
    const {ref: ref3, inView: inView3} = useInView({triggerOnce: false, threshold: 0.2});

    return (
        <div className="container mx-auto my-10 md:my-20 p-4">
            <h2 className="text-4xl mb-10 text-center">
                Как лечить болезненность молочных желез перед месячными?
            </h2>
            <div className="flex flex-wrap justify-evenly items-center gap-10">
                <motion.div
                    ref={ref1}
                    initial={{opacity: 0, scale: 0.8}}
                    animate={inView1 ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.8}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-2xl hover:bg-gray-100"
                >
                    <img
                        className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg"
                        src="/pills-hand.jpg"
                        alt="lifestyle"/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Изменения образа жизни:
                        </h5>
                        <p className="mb-3 font-normal text-gray-700">
                            Сократите потребление кофеина, алкоголя и соли.
                        </p>
                        <p className="mb-3 font-normal text-gray-700">
                            Увеличьте физическую активность (йога, пешие прогулки).
                        </p>
                        <p className="mb-3 font-normal text-gray-700">
                            Обеспечьте достаточный сон и отдых.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref2}
                    initial={{opacity: 0, scale: 0.8}}
                    animate={inView2 ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.8}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-2xl hover:bg-gray-100"
                >
                    <img
                        className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg"
                        src="/pills-hand.jpg"
                        alt="nutrition"/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Коррекция питания:
                        </h5>
                        <p className="mb-3 font-normal text-gray-700">
                            Добавьте в рацион витамины (особенно витамин Е и витамин B6).
                        </p>
                        <p className="mb-3 font-normal text-gray-700">
                            Снизьте потребление сахара, жирной и жареной пищи.
                        </p>
                        <p className="mb-3 font-normal text-gray-700">
                            Употребляйте больше фруктов, овощей и клетчатки.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref3}
                    initial={{opacity: 0, scale: 0.8}}
                    animate={inView3 ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.8}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-2xl hover:bg-gray-100"
                >
                    <img
                        className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg"
                        src="/pills-hand.jpg"
                        alt="medicine"/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Лекарственная терапия:
                        </h5>
                        <p className="mb-3 font-normal text-gray-700">
                            Назначаются растительные препараты или БАДы (например, ЛикоМаст).
                        </p>
                        <p className="mb-3 font-normal text-gray-700">
                            В некоторых случаях врач назначает гормональные препараты (гестагены) для стабилизации
                            гормонального фона.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BreastPainTreatment;