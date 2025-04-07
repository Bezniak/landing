import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {StepCard} from "../Selfexamination/Selfexamination.jsx";


const steps = [
    {
        icon: '/PMS&mastopathy-samostoyatelnaya-diagnostika.png',
        title: "Самостоятельная диагностика:",
        steps: [
            "Отслеживайте, возникает ли боль регулярно перед месячными и проходит ли с их началом.",
            "Проверьте грудь на отёчность и уплотнения, используя аккуратные круговые движения пальцев."
        ]
    },
    {
        icon: '/PMS&mastopathy-diagnostika-u-vracha.png',
        title: "Диагностика у врача:",
        steps: [
            "Консультация маммолога или гинеколога для профессионального осмотра.",
            "Маммография (по показаниям, обычно после 35-40 лет).",
            "Анализ крови на гормональный фон, если врач считает это необходимым."
        ]
    },
]

const PmsMastopathyDiagnosis = () => {
    const {ref: ref1, inView: inView1} = useInView({triggerOnce: false, threshold: 0.2});

    return (
        <div className="container mx-auto my-20 p-4">
            <h2 className="text-3xl md:text-4xl mb-10 text-center">
                Как выявить предменструальную мастопатию?
            </h2>
            <motion.div
                ref={ref1}
                initial={{opacity: 0, scale: 0.8}}
                animate={inView1 ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.8}}
                transition={{duration: 0.8, ease: 'easeOut'}}
                className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto"
            >
                {steps.map((step, index) => (
                    <StepCard key={index} Icon={step.icon} title={step.title} steps={step.steps}/>
                ))}
            </motion.div>
        </div>
    );
};

export default PmsMastopathyDiagnosis;
