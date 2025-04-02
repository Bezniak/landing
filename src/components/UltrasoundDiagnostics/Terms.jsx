import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const terms = [
    {
        title: "Эхогенность",
        items: [
            {name: "Нормоэхогенная ткань", description: "Структура железы в пределах нормы, без очевидных отклонений."},
            {
                name: "Гипоэхогенные участки",
                description: "Области, отражающие ультразвук слабее (часто это кисты, жидкостные полости, некоторые доброкачественные опухоли)."
            },
            {
                name: "Гиперэхогенные участки",
                description: "Зоны, отражающие ультразвук сильнее (могут быть связаны с уплотнениями, фиброзом, кальцинатами)."
            },
            {
                name: "Анэхогенные зоны",
                description: "Участки, совсем не отражающие ультразвук (обычно это кисты или полости с жидкостью)."
            }
        ]
    },
    {
        title: "Структура и контуры",
        items: [
            {
                name: "Однородная (гомогенная) ткань",
                description: "Равномерное распределение железистой и жировой ткани; характерно для здоровой груди или нерезко выраженных изменений."
            },
            {
                name: "Неоднородная (гетерогенная) ткань",
                description: "Наличие разных по эхогенности участков, что может указывать на фиброзно-кистозные изменения, воспаление или другие процессы."
            },
            {
                name: "Ровные и чёткие контуры",
                description: "Обычно признак доброкачественных образований (например, простой кисты) или нормальной структуры."
            },
            {
                name: "Нечёткие, размытые контуры",
                description: "Могут быть признаком воспаления, злокачественного процесса или других изменений."
            }
        ]
    },
    {
        title: "Дополнительные особенности",
        items: [
            {
                name: "Васкуляризация (кровоток):",
                description: "на УЗИ с Доплером оценивают кровоснабжение тканей. Увеличенный кровоток иногда указывает на рост опухоли или воспаление."
            },
            {
                name: "Микрокальцинаты:",
                description: "мелкие скопления кальция. На УЗИ заметны не всегда, чаще выявляются на маммографии, но могут быть видны и при ультразвуковом исследовании."
            },
        ]
    }
];

const Terms = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl mb-10 text-center">Общие термины в УЗИ молочной железы</h2>
            {terms.map((section, index) => (
                <Section key={index} section={section}/>
            ))}
        </div>
    );
};

const Section = ({section}) => {
    const {ref, inView} = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0}}
            animate={{opacity: inView ? 1 : 0}}
            transition={{duration: 1}}
            className="mb-6"
        >
            <h2 className="text-xl font-semibold text-[var(--green)] mb-2">{section.title}</h2>
            <ul className="space-y-3">
                {section.items.map((item, idx) => (
                    <motion.li
                        key={idx}
                        initial={{opacity: 0}}
                        animate={{opacity: inView ? 1 : 0}}
                        transition={{duration: 0.7, delay: idx * 0.2}}
                        className="p-4 border-l-4 border-[var(--green)] bg-gray-50 rounded-lg"
                    >
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm">{item.description}</p>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default Terms;
