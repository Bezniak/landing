import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const PmsMastopathyDiagnosis = () => {
    const {ref: ref1, inView: inView1} = useInView({triggerOnce: false, threshold: 0.2});
    const {ref: ref2, inView: inView2} = useInView({triggerOnce: false, threshold: 0.2});

    return (
        <div className="container mx-auto my-20">
            <h2 className="text-4xl mb-10 text-center">
                Как выявить предменструальную мастопатию?
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-20">
                <motion.div
                    ref={ref1}
                    initial={{opacity: 0, scale: 0.8}}
                    animate={inView1 ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.8}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col"
                >
                    <img className="rounded-t-lg" src="/pils.jpg" alt="pils"/>
                    <div className="p-5 flex-grow">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Самостоятельная диагностика:
                        </h5>
                        <p className="mb-3 font-normal text-justify text-gray-700">
                            Отслеживайте, возникает ли боль регулярно перед месячными и проходит ли с их началом.
                        </p>
                        <p className="mb-3 font-normal text-justify text-gray-700">
                            Проверьте грудь на отёчность и уплотнения, используя аккуратные круговые движения пальцев.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref2}
                    initial={{opacity: 0, scale: 0.8}}
                    animate={inView2 ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.8}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col"
                >
                    <img className="rounded-t-lg" src="/pils.jpg" alt="pils"/>
                    <div className="p-5 flex-grow">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Диагностика у врача:
                        </h5>
                        <p className="mb-3 font-normal text-justify text-gray-700">
                            Консультация маммолога или гинеколога для профессионального осмотра.
                        </p>
                        <p className="mb-3 font-normal text-justify text-gray-700">
                            Маммография (по показаниям, обычно после 35-40 лет).
                        </p>
                        <p className="mb-3 font-normal text-justify text-gray-700">
                            Анализ крови на гормональный фон, если врач считает это необходимым.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PmsMastopathyDiagnosis;
