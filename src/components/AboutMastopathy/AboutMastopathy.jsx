import React from 'react';
import {motion} from "framer-motion";
import FAQAccordion from "../UltrasoundDiagnostics/FAQAccordion.jsx";
import MetaTags from "../../common/MetaTags.jsx";
import {Parallax} from "react-scroll-parallax";

// FAQ Data
const faqData = [
    {
        question: "Можно ли заниматься спортом при мастопатии?",
        answer: "Легкие физические нагрузки полезны, но важно избегать тяжелых упражнений, которые могут травмировать грудь."
    },
    {
        question: "Может ли мастопатия перейти в рак?",
        answer: "Мастопатия является доброкачественным заболеванием, но важно регулярно проверяться, чтобы исключить другие заболевания."
    }
];

// Card Component
const InfoCard = ({imageSrc, text}) => (
    <div
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg w-full md:w-80 h-96">
        <img className="object-cover w-full h-48 rounded-t-lg md:w-full md:h-48" src={imageSrc} alt="image"/>
        <div className="flex flex-col justify-center leading-normal h-full">
            <p className="tracking-tight text-center">{text}</p>
        </div>
    </div>
);

const AboutMastopathy = () => {
    return (
        <>
            <MetaTags
                title="Мастопатия: симптомы, причины и лечение"
                description="Узнайте о мастопатии: ее симптомах, причинах, методах диагностики и эффективном лечении. Также читайте о роли антиоксидантов в профилактике мастопатии."
                keywords="мастопатия, фиброзно-кистозная мастопатия, причины мастопатии, симптомы мастопатии, лечение мастопатии, диагностика мастопатии, антиоксиданты, профилактика мастопатии"
            />
            <div>
                {/* Stylish background block */}
                <div
                    className="relative overflow-hidden w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700">
                    <motion.img
                        src="/page3.png"
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{scale: 1.2}}
                        animate={{scale: 1.1}}
                        transition={{duration: 10, repeat: Infinity, ease: "easeInOut"}}
                    />
                    <motion.h1
                        className="relative z-10 p-5 text-white text-3xl md:text-5xl text-center px-4 md:px-0 w-[90%] mx-auto"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 2}}
                    >
                        Мастопатия: симптомы, причины и лечение
                    </motion.h1>
                </div>

                <div>
                    <section
                        className='container p-5 mx-auto md:p-0 py-10 md:py-20 flex flex-col md:flex-row justify-evenly items-center gap-10'>
                        <div className='md:w-1/2'>
                            <h2 className="text-2xl font-semibold">Что такое фиброзно-кистозная мастопатия?</h2>
                            <p className="mt-4">
                                Фиброзно-кистозная мастопатия – это заболевание молочной железы, при котором в ткани
                                груди развиваются доброкачественные изменения. Эти изменения могут быть как единичными,
                                так и множественными, и включают фиброзные ткани и кисты. Чаще всего заболевание
                                встречается у женщин репродуктивного возраста.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center overflow-hidden relative h-fit">
                            <Parallax translateY={[-50, 50]}>
                                <img src="/lycomat_17.png" alt="image"
                                     className="md:max-w-xl h-auto object-cover rounded-full"/>
                            </Parallax>
                        </div>
                    </section>

                    <h2 className="container p-5 mx-auto text-2xl mb-10 font-semibold text-gray-800">
                        Основные причины мастопатии у женщин
                    </h2>
                    <div className="container mx-auto p-5 flex items-center justify-center gap-10 flex-wrap">
                        <InfoCard imageSrc="/img_3.jpg" text="Гормональные изменения в организме"/>
                        <InfoCard imageSrc="/img_3.jpg" text="Нарушение обмена веществ"/>
                        <InfoCard imageSrc="/img_3.jpg" text="Генетическая предрасположенность"/>
                        <InfoCard imageSrc="/img_3.jpg" text="Заболевания эндокринной системы"/>
                    </div>

                    <section
                        className='container mx-auto p-5 md:p-0 py-10 md:py-20 flex flex-col md:flex-row justify-evenly items-center gap-10'>
                        <div className="w-full md:w-1/2 flex justify-center overflow-hidden relative h-fit">
                            <Parallax translateY={[-50, 50]}>
                                <img src="/lycomat_17.png" alt="image"
                                     className="md:max-w-xl h-auto object-cover rounded-full"/>
                            </Parallax>
                        </div>
                        <div className='md:w-1/2'>
                            <h2 className="text-2xl font-semibold">
                                Гормональные изменения и мастопатия
                            </h2>
                            <p className="mt-4">
                                Гормональные изменения играют важную роль в развитии мастопатии. Нарушения в уровне
                                эстрогенов и прогестерона могут привести к увеличению ткани молочной железы и развитию
                                фиброзных изменений.
                            </p>
                        </div>
                    </section>

                    <h2 className="container mx-auto text-2xl mb-10 p-5 font-semibold text-gray-800">
                        Симптомы мастопатии: на что обратить внимание
                    </h2>
                    <div className="flex items-center justify-center gap-10 flex-wrap">
                        <InfoCard imageSrc="/img_3.jpg" text="Боль в области молочных желез"/>
                        <InfoCard imageSrc="/img_3.jpg" text="Неровности и уплотнения в груди"/>
                        <InfoCard imageSrc="/img_3.jpg" text="Выделения из сосков"/>
                        <InfoCard imageSrc="/img_3.jpg" text="Изменения формы и размера молочной железы"/>
                    </div>

                    {/* Section: Diagnostics */}
                    <motion.section
                        className="my-12 container mx-auto p-5"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1.5}}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Диагностика мастопатии: как выявить заболевание
                        </h2>
                        <p className="mt-4 text-gray-700">
                            Диагностика мастопатии включает в себя несколько методов: ультразвуковое исследование,
                            маммография, а также пальпация молочных желез врачом. Иногда могут быть проведены
                            дополнительные анализы крови для определения уровня гормонов.
                        </p>
                    </motion.section>

                    {/* Section: Treatment Methods */}
                    <motion.section
                        className="my-12 container mx-auto p-5"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1.5}}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Как лечить мастопатию: эффективные методы
                        </h2>
                        <p className="mt-4 text-gray-700">
                            Лечение мастопатии зависит от типа заболевания и его стадии. В некоторых случаях достаточно
                            наблюдения, в других — медикаментозного лечения. В более тяжелых случаях может потребоваться
                            хирургическое вмешательство.
                        </p>
                    </motion.section>

                    {/* FAQ Section */}
                    <FAQAccordion faqItems={faqData}/>

                    {/* Section: Antioxidants in Prevention */}
                    <motion.section
                        className="bg-gradient-to-r py-20 flex flex-col justify-center items-center from-red-900 to-red-700  p-4 relative overflow-hidden"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1.5}}
                    >
                        <h2 className="text-2xl font-semibold text-white">
                            Антиоксиданты при мастопатии: роль в профилактике
                        </h2>
                        <p className="mt-4 text-white text-center">
                            Антиоксиданты играют важную роль в профилактике и лечении мастопатии, так как они помогают
                            снизить воспаление и улучшить общее состояние организма. Включение антиоксидантных продуктов
                            в рацион может помочь предотвратить развитие заболевания.
                        </p>
                    </motion.section>
                </div>
            </div>
        </>
    );
};

export default AboutMastopathy;
