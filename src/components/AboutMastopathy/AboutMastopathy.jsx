import React from 'react';
import { motion } from "framer-motion";
import FAQAccordion from "../UltrasoundDiagnostics/FAQAccordion.jsx";

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
const InfoCard = ({ imageSrc, text }) => (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-80 h-96">
        <img className="object-cover w-full h-48 rounded-t-lg md:w-full md:h-48" src={imageSrc} alt="image" />
        <div className="flex flex-col justify-center p-4 leading-normal h-full">
            <p className="mb-2 tracking-tight text-center">{text}</p>
        </div>
    </div>
);

const AboutMastopathy = () => {
    return (
        <div>
            {/* Stylish background block */}
            <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700">
                <motion.img
                    src="/bg-pms.jpg"
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.h1
                    className="relative z-10 text-white text-3xl md:text-5xl text-center px-4 md:px-0 w-[90%] mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    Мастопатия: симптомы, причины и лечение
                </motion.h1>
            </div>

            {/* Text container */}
            <div className="container mx-auto p-6">
                {/* Section: What is fibrocystic mastopathy? */}
                <section className="my-12">
                    <h2 className="text-2xl font-semibold text-gray-800">Что такое фиброзно-кистозная мастопатия?</h2>
                    <p className="mt-4 text-gray-700">
                        Фиброзно-кистозная мастопатия – это заболевание молочной железы, при котором в ткани груди развиваются доброкачественные изменения.
                        Эти изменения могут быть как единичными, так и множественными, и включают фиброзные ткани и кисты. Чаще всего заболевание встречается у женщин репродуктивного возраста.
                    </p>
                </section>

                <h2 className="text-2xl mb-10 font-semibold text-gray-800">Основные причины мастопатии у женщин</h2>
                <div className="flex items-center justify-center gap-10 flex-wrap">
                    <InfoCard imageSrc="/img_3.jpg" text="Гормональные изменения в организме" />
                    <InfoCard imageSrc="/img_3.jpg" text="Нарушение обмена веществ" />
                    <InfoCard imageSrc="/img_3.jpg" text="Генетическая предрасположенность" />
                    <InfoCard imageSrc="/img_3.jpg" text="Заболевания эндокринной системы" />
                </div>

                {/* Section: Hormonal Changes and Mastopathy */}
                <section className="my-12">
                    <h2 className="text-2xl font-semibold text-gray-800">Гормональные изменения и мастопатия</h2>
                    <p className="mt-4 text-gray-700">
                        Гормональные изменения играют важную роль в развитии мастопатии. Нарушения в уровне эстрогенов и прогестерона могут привести к увеличению ткани молочной железы и развитию фиброзных изменений.
                    </p>
                </section>

                <h2 className="text-2xl mb-10 font-semibold text-gray-800">Симптомы мастопатии: на что обратить внимание</h2>
                <div className="flex items-center justify-center gap-10 flex-wrap">
                    <InfoCard imageSrc="/img_3.jpg" text="Боль в области молочных желез" />
                    <InfoCard imageSrc="/img_3.jpg" text="Неровности и уплотнения в груди" />
                    <InfoCard imageSrc="/img_3.jpg" text="Выделения из сосков" />
                    <InfoCard imageSrc="/img_3.jpg" text="Изменения формы и размера молочной железы" />
                </div>

                {/* Section: Diagnostics */}
                <motion.section
                    className="my-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800">Диагностика мастопатии: как выявить заболевание</h2>
                    <p className="mt-4 text-gray-700">
                        Диагностика мастопатии включает в себя несколько методов: ультразвуковое исследование, маммография, а также пальпация молочных желез врачом. Иногда могут быть проведены дополнительные анализы крови для определения уровня гормонов.
                    </p>
                </motion.section>

                {/* Section: Treatment Methods */}
                <motion.section
                    className="my-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800">Как лечить мастопатию: эффективные методы</h2>
                    <p className="mt-4 text-gray-700">
                        Лечение мастопатии зависит от типа заболевания и его стадии. В некоторых случаях достаточно наблюдения, в других — медикаментозного лечения. В более тяжелых случаях может потребоваться хирургическое вмешательство.
                    </p>
                </motion.section>

                {/* FAQ Section */}
                <FAQAccordion faqItems={faqData} />

                {/* Section: Antioxidants in Prevention */}
                <motion.section
                    className="my-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800">Антиоксиданты при мастопатии: роль в профилактике</h2>
                    <p className="mt-4 text-gray-700">
                        Антиоксиданты играют важную роль в профилактике и лечении мастопатии, так как они помогают снизить воспаление и улучшить общее состояние организма. Включение антиоксидантных продуктов в рацион может помочь предотвратить развитие заболевания.
                    </p>
                </motion.section>
            </div>
        </div>
    );
};

export default AboutMastopathy;
