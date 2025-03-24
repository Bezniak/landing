import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const Advice = () => {
    const {ref: ref1, inView: inView1} = useInView({triggerOnce: false, threshold: 0.2});
    const {ref: ref2, inView: inView2} = useInView({triggerOnce: false, threshold: 0.2});

    return (
        <div className="container mx-auto my-10 md:my-20 p-4">
            <h2 className="text-4xl mb-10 text-center">
                Полезные советы женщинам при ПМС-мастопатии
            </h2>
            <div className="flex flex-wrap justify-evenly items-center gap-10">
                {[
                    {
                        tips: [
                            "Носите удобный бюстгальтер без косточек, который хорошо поддерживает, но не сдавливает грудь.",
                            "Делайте лёгкий массаж груди ежедневно в душе.",
                            "Используйте тёплые компрессы или мягкий гель с успокаивающим эффектом.",
                            "Попробуйте пить травяные чаи на основе ромашки или мелиссы, чтобы снизить уровень стресса и напряжения.",
                            "Откажитесь от курения, так как оно может усиливать симптомы.",
                            "Ведите дневник симптомов для точного отслеживания изменений и своевременного обращения к врачу."
                        ],
                        ref: ref1,
                        inView: inView1
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        ref={item.ref}
                        initial={{opacity: 0, y: 50}}
                        animate={item.inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                        transition={{duration: 0.8, ease: 'easeOut'}}
                        className="flex flex-col text-justify"
                    >
                        <ul className="list-disc text-gray-700 px-6">
                            {item.tips.map((tip, tipIndex) => (
                                <motion.li
                                    key={tipIndex}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: tipIndex * 0.2}}
                                    className="mb-2"
                                >
                                    {tip}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
                <motion.div
                    ref={ref2}
                    initial={{opacity: 0, y: 50}}
                    animate={inView2 ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    className="flex flex-col text-justify"
                >
                    <h3 className="text-lg mb-4">
                        Дополнительные полезные советы и интересные факты:
                    </h3>
                    <ul className="list-disc text-gray-700 px-6">
                        <motion.li
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                            className="mb-2"
                        >
                            Холодный компресс: если теплая процедура не помогает, попробуйте приложить к груди прохладный компресс или пакет со льдом, завернутый в полотенце.
                        </motion.li>
                        <motion.li
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.4}}
                            className="mb-2"
                        >
                            Витамин D: дефицит витамина D может усиливать проявления ПМС-мастопатии, поэтому полезно контролировать его уровень и при необходимости принимать дополнительно.
                        </motion.li>
                        <motion.li
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.6}}
                            className="mb-2"
                        >
                            Масло примулы вечерней: употребление этого масла показало хороший эффект при снижении симптомов мастопатии.
                        </motion.li>
                        <motion.li
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.8}}
                            className="mb-2"
                        >
                            Факт: Исследования показывают, что стресс значительно усиливает болезненность в груди, поэтому регулярное снятие стресса (медитация, дыхательные практики) крайне важно.
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
            <p className="text-gray-700 text-center mt-10">
                ПМС-мастопатия не является опасным заболеванием, но значительно влияет на качество жизни. Поэтому регулярное наблюдение и консультации специалистов помогут своевременно выявить любые отклонения и подобрать оптимальный подход к лечению и профилактике.
            </p>
        </div>
    );
};

export default Advice;
