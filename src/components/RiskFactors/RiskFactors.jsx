import React from 'react';
import {Parallax} from 'react-scroll-parallax';

const RiskFactors = () => {
    return (
        <div className="relative h-fit md:h-screen flex items-center justify-center p-4 overflow-hidden py-10">
            <Parallax speed={-20} className="absolute inset-0 w-full h-full">
                <img src="/bg.jpg" alt="Background" className="w-full h-full object-cover"/>
            </Parallax>
            <div className="relative z-10 w-full flex flex-col justify-center items-center mx-auto">
                <h2 className="text-4xl mb-10 text-center">
                    Факторы риска заболеваний молочных желез
                </h2>
                <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-800">
                    <li>
                        <strong>Возраст:</strong> риск появления злокачественных опухолей повышается после 40–45 лет.
                    </li>
                    <li>
                        <strong>Наследственность:</strong> наличие случаев рака груди у близких родственниц (мать,
                        сестра, бабушка) значительно увеличивает вероятность развития заболевания. У некоторых женщин
                        выявляются гены BRCA1/BRCA2, повышающие риск.
                    </li>
                    <li>
                        <strong>Гормональные нарушения:</strong> сбои в работе щитовидной железы, яичников, длительный
                        приём гормональных препаратов или заместительной гормональной терапии.
                    </li>
                    <li>
                        <strong>Репродуктивный анамнез:</strong> отсутствие родов или первая беременность после 30 лет,
                        короткий период грудного вскармливания или его отсутствие.
                    </li>
                    <li>
                        <strong>Избыточный вес:</strong> ожирение приводит к повышению уровня эстрогенов, что может
                        повышать риск рака груди.
                    </li>
                    <li>
                        <strong>Малоподвижный образ жизни и вредные привычки:</strong> курение и частое употребление
                        алкоголя негативно влияют на здоровье груди.
                    </li>
                    <li>
                        <strong>Стресс:</strong> постоянные психоэмоциональные нагрузки могут косвенно способствовать
                        гормональным сбоям.
                    </li>
                </ol>
                <p className="mt-6 text-center text-gray-700 italic">
                    <strong>Полезный факт:</strong> Длительное грудное вскармливание считается одним из факторов,
                    снижающих вероятность развития некоторых заболеваний молочных желез.
                </p>
            </div>
        </div>
    );
};

export default RiskFactors;
