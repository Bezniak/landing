import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const data = [
    {
        img: '/PMS&mastopathy-izmeneniya-obraza-zhizni.png',
        title: 'Изменения образа жизни:',
        steps: [
            'Сократите потребление кофеина, алкоголя и соли.',
            'Увеличьте физическую активность (йога, пешие прогулки).',
            ' Обеспечьте достаточный сон и отдых.'
        ],
    },
    {
        img: '/PMS&mastopathy-korrektsiya-pitaniya.png',
        title: 'Коррекция питания:',
        steps: [
            'Добавьте в рацион витамины (особенно витамин Е и витамин B6).',
            'Снизьте потребление сахара, жирной и жареной пищи.',
            'Употребляйте больше фруктов, овощей и клетчатки.'
        ],
    },
    {
        img: '/PMS&mastopathy-lekarstvennaya-terapiya.png',
        title: 'Лекарственная терапия:',
        steps: [
            'Назначаются растительные препараты или БАДы (например, ЛикоМаст).',
            'В некоторых случаях врач назначает гормональные препараты (гестагены) для стабилизации гормонального фона.',
        ],
    },
]

const BreastPainTreatment = () => {
    const {ref: ref1, inView: inView1} = useInView({triggerOnce: false, threshold: 0.2});


    return (
        <div className="container mx-auto my-10 md:my-20 p-4">
            <h2 className="text-3xl md:text-4xl mb-10 text-center">
                Как лечить болезненность молочных желез перед месячными?
            </h2>
            <div>
                <motion.div
                    ref={ref1}
                    initial={{opacity: 0, scale: 0.8}}
                    animate={inView1 ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.8}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                >
                    {data.map((item, index) => (
                        <div className="bg-white" key={index}>
                            <img src={item.img} alt={item.title} className='w-full'/>
                            <h5 className="my-3 text-2xl font-semibold tracking-tight text-gray-900 ">
                                {item.title}
                            </h5>
                            <ul className="text-lg font-normal text-gray-500">
                                {item.steps.map((step, index) => (
                                    <li key={index} className="text-left mb-2">
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default BreastPainTreatment;