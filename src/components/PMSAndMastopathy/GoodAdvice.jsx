import React from 'react';
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

const data = [
    {
        img: '/PMS&mastopathy-poleznye-sovety-zhenschinam-pri-pms-mastopatii-1.png',
        desc: [
            "Носите удобный бюстгальтер без косточек, который хорошо поддерживает, но не сдавливает грудь.",
            "Делайте лёгкий массаж груди ежедневно в душе."
        ]
    },
    {
        img: '/PMS&mastopathy-poleznye-sovety-zhenschinam-pri-pms-mastopatii-2.png',
        desc: [
            "Используйте тёплые компрессы или мягкий гель с успокаивающим эффектом.",
            "Попробуйте пить травяные чаи на основе ромашки или мелиссы, чтобы снизить уровень стресса и напряжения."
        ]
    },
    {
        img: '/PMS&mastopathy-poleznye-sovety-zhenschinam-pri-pms-mastopatii-3.png',
        desc: [
            "Откажитесь от курения, так как оно может усиливать симптомы.",
            "Ведите дневник симптомов для точного отслеживания изменений и своевременного обращения к врачу."
        ]
    }
];

const GoodAdvice = () => {
    return (
        <div className='container mx-auto p-5'>
            <h2 className="container mx-auto p-4 text-3xl md:text-4xl mb-10 text-center">
                Полезные советы женщинам при ПМС-мастопатии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {data.map((item, index) => {
                    const {ref, inView} = useInView({
                        triggerOnce: false,
                        threshold: 0.4,
                    });

                    return (
                        <motion.div
                            key={index}
                            ref={ref}
                            initial={{opacity: 0, y: 20}}
                            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                            transition={{duration: 0.6, ease: "easeOut"}}
                        >
                            <div>
                                <img
                                    src={item.img}
                                    alt={item.desc[0]}
                                    className="w-full h-64 object-cover mb-4 rounded-lg"
                                />
                                <ul className="text-gray-700 text-left text-base">
                                    {item.desc.map((text, i) => (
                                        <li key={i} className='mb-3'>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default GoodAdvice;