import React from 'react';
import {Parallax} from 'react-scroll-parallax';

const RiskFactors = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-start p-5 overflow-hidden py-10">
            <Parallax speed={-20} className="absolute inset-0 w-full h-full">
                <img src="/lycomat_30.png" alt="Факторы риска заболеваний молочных желез" className="w-full h-full object-cover"/>
            </Parallax>
            <div className="container mx-auto z-10 flex flex-col justify-start items-start">
                <h2 className="text-2xl md:text-4xl mb-6 md:mb-10">
                    Факторы риска заболеваний молочных желез
                </h2>
                <ul className="space-y-4 text-base md:text-lg text-gray-500">
                    <li><strong className='font-semibold'>Возраст:</strong> риск появления злокачественных опухолей
                        повышается после 40–45 лет.
                    </li>
                    <li><strong className='font-semibold'>Наследственность:</strong> наличие случаев рака груди у
                        близких родственниц (мать, сестра, бабушка) значительно увеличивает вероятность развития
                        заболевания.
                    </li>
                    <li><strong className='font-semibold'>Гормональные нарушения:</strong> сбои в работе щитовидной
                        железы, яичников, длительный приём гормональных препаратов или заместительной гормональной
                        терапии.
                    </li>
                    <li><strong className='font-semibold'>Репродуктивный анамнез:</strong> отсутствие родов или первая
                        беременность после 30 лет, короткий период грудного вскармливания или его отсутствие.
                    </li>
                    <li><strong className='font-semibold'>Избыточный вес:</strong> ожирение приводит к повышению уровня
                        эстрогенов, что может повышать риск рака груди.
                    </li>
                    <li><strong className='font-semibold'>Малоподвижный образ жизни и вредные привычки:</strong> курение
                        и частое употребление алкоголя негативно влияют на здоровье груди.
                    </li>
                    <li><strong className='font-semibold'>Стресс:</strong> постоянные психоэмоциональные нагрузки могут
                        косвенно способствовать гормональным сбоям.
                    </li>
                </ul>
                <p className="mt-6 text-left text-base md:text-lg text-gray-500 font-normal">
                    <strong className='text-[var(--green)] font-semibold'>
                        Полезный факт:</strong> &nbsp; Длительное грудное
                    вскармливание считается одним из факторов, снижающих вероятность развития некоторых заболеваний
                    молочных желез.
                </p>
            </div>
        </div>
    );
};

export default RiskFactors;
