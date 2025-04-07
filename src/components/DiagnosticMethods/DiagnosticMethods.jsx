import React from 'react';

const diagnosticMethods = [
    {
        title: "УЗИ (ультразвуковое исследование)",
        description: [
            "Рекомендуется женщинам до 40 лет ежегодно и при наличии любых тревожных симптомов.",
            "Позволяет оценить состояние тканей, обнаружить кисты, фиброаденомы и другие образования."
        ]
    },
    {
        title: "Маммография",
        description: [
            "\"Золотой стандарт\" для женщин старше 40–45 лет.",
            "Проводится обычно 1 раз в год или 1 раз в 2 года (зависит от рекомендаций врача и индивидуальных факторов риска).",
            "Может обнаружить микрокальцинаты и небольшие опухоли, невидимые на УЗИ."
        ]
    },
    {
        title: "МРТ (магнитно-резонансная томография)",
        description: [
            "Используется при высоком риске развития рака (например, при наследственной предрасположенности) или для уточнения диагноза, если результаты УЗИ и маммографии противоречивы."
        ]
    },
    {
        title: "Пункция или биопсия",
        description: [
            "Выполняется при обнаружении подозрительных образований для точного определения их природы (доброкачественная или злокачественная)."
        ]
    },
    {
        title: "Цитологическое и гистологическое исследование",
        description: [
            "Исследование клеток и тканей, полученных при пункции/биопсии, под микроскопом."
        ]
    }
];

const DiagnosticMethods = () => {
    return (
        <div className="container mx-auto p-4 py-10 md:py-20">
            <h2 className="text-3xl md:text-4xl mb-10">
                Методы диагностики заболеваний груди
            </h2>
            <div className="overflow-hidden">
                {diagnosticMethods.map((method, index) => (
                    <div key={index} className="mb-3">
                        <button
                            className="w-full rounded-lg text-left p-4 font-medium text-white bg-linear-to-r/hsl from-green-600 to-green-500 hover:bg-pink-200 focus:outline-none transition cursor-pointer"
                            onClick={() => {
                                document.getElementById(`content-${index}`).classList.toggle('hidden');
                            }}
                        >
                            {method.title}
                        </button>
                        <div id={`content-${index}`} className="hidden p-4 bg-white">
                            {method.description.map((text, idx) => (
                                <p key={idx} className="text-gray-600 mb-2">{text}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
                <span className='text-[var(--red)] font-semibold'>
                    Важно:
                </span> &nbsp;
                выбор метода диагностики остаётся за врачом, исходя из возраста пациентки, её индивидуальной истории и
                предположительного диагноза.
            </p>
        </div>
    );
};

export default DiagnosticMethods;
