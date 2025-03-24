import React from 'react';
import {motion} from 'framer-motion';

const findings = [
    {
        title: "Кисты (простые, сложные)",
        image: "/ggg_7.jpg",
        details: [
            {
                name: "Простая киста",
                description: "Обычно анаэхогенная (чёрная на экране), с ровными контрами и тонкими стенками; заполнена жидкостью, чаще всего доброкачественна."
            },
            {
                name: "Сложная киста",
                description: "Может содержать внутри перегородки, осадки или плотные компоненты. Требует дополнительного наблюдения, а иногда – пункции, чтобы определить характер содержимого."
            }
        ]
    },
    {
        title: "Фиброзно-кистозные изменения (мастопатия)",
        image: "/ggg_7.jpg",
        details: [
            {
                description: "Характеризуются неоднородной структурой железы, наличием мелких кист или уплотнений. Чаще всего являются доброкачественным состоянием, но нуждаются в регулярном наблюдении."
            }
        ]
    },
    {
        title: "Фиброаденома",
        image: "/ggg_7.jpg",
        details: [
            {
                description: "Доброкачественная опухоль из железистой ткани. На УЗИ обычно выглядит как чёткое, овалоподобное и гипоэхогенное образование, иногда с псевдокапсулой. Может быть эластичной и подвижной при пальпации."
            }
        ]
    },
    {
        title: "Липома (жировая опухоль)",
        image: "/ggg_7.jpg",
        details: [
            {
                description: "Доброкачественное образование из жировой ткани. На УЗИ может выглядеть как гипо- или гиперэхогенное образование с чёткими ровными границами. Не всегда требует удаления."
            }
        ]
    },
    {
        title: "Галактоцеле",
        image: "/ggg_7.jpg",
        details: [
            {
                description: "Киста, содержащая грудное молоко (чаще встречается у кормящих женщин). Имеет жидкостную структуру, иногда с перегородками."
            }
        ]
    },
    {
        title: "Воспалительные процессы (мастит, абсцесс)",
        image: "/ggg_7.jpg",
        details: [
            {
                description: "На УЗИ могут выглядеть как неоднородные участки с повышенным кровотоком и расплавлением тканей (если абсцесс). Требуется лечение у врача."
            }
        ]
    },
    {
        title: "Подозрительные/злокачественные образования",
        image: "/ggg_7.jpg",
        details: [
            {
                description: "Могут иметь нечеткие контуры, неоднородную структуру, усиленный кровоток. При малейшем подозрении обычно назначается дообследование (биопсия, маммография, МРТ)."
            }
        ]
    },
];

const Findings = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl mb-10 text-center">
                Распространённые ультразвуковые находки и диагнозы
            </h2>
            <div className='flex flex-wrap justify-evenly items-center gap-10'>
                {findings.map((finding, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-pink-50 md:h-full"
                        initial={{opacity: 0, scale: 0.8}}  // Начальная анимация
                        whileInView={{opacity: 1, scale: 1}}  // Анимация при попадании в видимость
                        transition={{duration: 0.5, delay: index * 0.2}}  // Задержка анимации
                        viewport={{once: false}}  // Повторная анимация
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-56 md:rounded-none md:rounded-s-lg"
                            src={finding.image}
                            alt={`Изображение для ${finding.title}`}
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal h-full">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight">
                                {finding.title}
                            </h5>
                            <ul className="list-none mt-3 space-y-3">
                                {finding.details.map((detail, idx) => (
                                    <li key={idx}>
                                        {detail?.name && (
                                            <p className="font-medium text-gray-900">{detail.name}</p>
                                        )}
                                        <p className="text-sm text-gray-600">{detail.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Findings;
