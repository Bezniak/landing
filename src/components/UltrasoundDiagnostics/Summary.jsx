import React from 'react';

const Summary = () => {
    return (
        <div className="my-20 px-6 sm:px-8 lg:px-16">
            <div className="space-y-10">
                {/* Заголовок с плавным эффектом */}
                <h2 className="text-4xl mb-10 text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
                    Подведём итоги
                </h2>

                <div className="space-y-6">
                    <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
                        {/* Список с мягкими переходами */}
                        <li className="transition-all duration-300 ease-in-out hover:text-pink-600">
                            УЗИ молочной железы – эффективный метод раннего выявления различных изменений.
                        </li>
                        <li className="transition-all duration-300 ease-in-out hover:text-pink-600">
                            Заключение УЗИ часто включает медицинские термины, описывающие структуру тканей, наличие кист, узлов или возможных опухолей.
                        </li>
                        <li className="transition-all duration-300 ease-in-out hover:text-pink-600">
                            Чёткие границы, однородность и отсутствие подозрительных элементов обычно указывают на доброкачественный характер изменений.
                        </li>
                        <li className="transition-all duration-300 ease-in-out hover:text-pink-600">
                            Любые неоднородные, быстро растущие или сомнительные образования требуют более глубокого обследования (биопсии, маммографии, МРТ).
                        </li>
                        <li className="transition-all duration-300 ease-in-out hover:text-pink-600">
                            Регулярное наблюдение у маммолога и следование врачебным рекомендациям — лучший способ сохранить здоровье груди.
                        </li>
                    </ul>

                    {/* Блок с итоговым посланием */}
                    <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-xl shadow-lg text-center text-gray-900 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                        <p>
                            Следите за своими результатами, не стесняйтесь задавать вопросы и помните, что ваш лечащий врач – главный помощник и источник достоверных ответов. Внимательное отношение к здоровью молочных желез – залог спокойствия и уверенности в завтрашнем дне!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
