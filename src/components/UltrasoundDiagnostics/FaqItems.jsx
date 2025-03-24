import React, {useState} from 'react';


const faqItems = [
    {
        question: "У меня нашли «простую кисту» размером 10 мм, это опасно?",
        answer: "Простые кисты, как правило, доброкачественные. Большинство небольших кист не требуют лечения, только наблюдения. Врач может назначить повторное УЗИ через 6–12 месяцев, чтобы убедиться, что киста не растёт и не изменяется."
    },
    {
        question: "Может ли фиброаденома превратиться в рак?",
        answer: "Фиброаденомы крайне редко перерождаются в злокачественные опухоли. Обычно их удаляют только при быстром росте, подозрительных признаках или из эстетических соображений. Окончательное решение принимает врач после дополнительных исследований."
    },
    {
        question: "На УЗИ написано «фиброзно-кистозные изменения», но врач сказал, что это не страшно. Это правда?",
        answer: "Фиброзно-кистозная мастопатия – одно из самых распространённых доброкачественных изменений. Оно не является «серьёзным» заболеванием, но важно наблюдать динамику и вовремя проверяться у маммолога."
    },
    {
        question: "Нужно ли мне проходить маммографию, если я сделала УЗИ?",
        answer: "Зависит от возраста и рекомендаций врача. Обычно женщинам старше 40 лет советуют делать маммографию регулярно (раз в 1-2 года), а УЗИ дополняет эту диагностику. УЗИ может быть основным методом для более молодых женщин и при плотной структуре груди."
    }
];


const FaqItems = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="accordion-open" data-accordion="open" className='my-20 container mx-auto'>
            <h2 className="text-4xl mb-10 text-center">
                Частые вопросы
            </h2>
            {faqItems.map((item, index) => (
                <div key={index} className='mb-5'>
                    <h2 id={`accordion-open-heading-${index + 1}`}>
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-pink-200 rounded-t-xl hover:bg-pink-50 gap-5"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`accordion-open-body-${index + 1}`}
                        >
                            <span className="flex items-center">{item.question}</span>
                            <svg
                                data-accordion-icon
                                className={`w-3 h-3 ${openIndex === index ? 'rotate-180' : ''} shrink-0`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id={`accordion-open-body-${index + 1}`}
                        className={openIndex === index ? 'p-5 border border-pink-200' : 'hidden'}
                        aria-labelledby={`accordion-open-heading-${index + 1}`}
                    >
                        <p className="mb-2 text-gray-500 dark:text-gray-400">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqItems;