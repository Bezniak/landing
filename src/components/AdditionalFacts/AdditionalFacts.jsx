import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const facts = [
    {
        title: "Статистика",
        content: "По данным глобальных регистров (GLOBOCAN 2020), рак молочной железы составляет около 24,5% всех новых случаев рака у женщин.",
        icon: "📊",
    },
    {
        title: "Ранние симптомы",
        content: "Иногда новообразование может не прощупываться как «шарик»; настораживающими признаками могут быть изменение контуров, формы или цвета кожи.",
        icon: "⚠️",
    },
    {
        title: "Мифы и реальность",
        content: "Некоторые женщины думают, что травма груди может вызвать рак, но это не подтверждается исследованиями. Травма может лишь выявить уже существующую патологию.",
        icon: "❌",
    },
];

export default function AdditionalFacts() {
    return (
        <div className="container mx-auto p-8 my-10">
            <motion.h2
                className="text-2xl md:text-4xl mb-10"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                Дополнительные полезные факты и советы
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {facts.map((fact, index) => (
                    <FactCard key={index} fact={fact} index={index}/>
                ))}
            </div>
        </div>
    );
}

function FactCard({fact, index}) {
    const {ref, inView} = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 100}}
            animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 100,
            }}
            transition={{duration: 1, delay: index * 0.3}}
        >
            <div
                className="bg-[var(--light-green)] rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-all h-full">
                <div className="text-4xl mb-4">
                    {fact.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">
                    {fact.title}
                </h3>
                <p className=" text-center">
                    {fact.content}
                </p>
            </div>
        </motion.div>
    );
}
