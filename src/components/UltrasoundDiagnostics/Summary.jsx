import React from 'react';

const Summary = () => {
    return (
        <div
            className="bg-gradient-to-r py-20 flex justify-center items-center from-red-900 to-red-700 text-black p-4 relative overflow-hidden">
            <div className="container mx-auto space-y-10">
                <h2 className="text-3xl md:text-4xl mb-10 text-center text-white">
                    Подведём итоги
                </h2>
                <ul className="space-y-4 text-lg !text-white">
                    {/* Список с мягкими переходами */}
                    <li className='!text-white'>
                        УЗИ молочной железы – эффективный метод раннего выявления различных изменений.
                    </li>
                    <li className='!text-white'>
                        Заключение УЗИ часто включает медицинские термины, описывающие структуру тканей, наличие кист,
                        узлов или возможных опухолей.
                    </li>
                    <li className='!text-white'>
                        Чёткие границы, однородность и отсутствие подозрительных элементов обычно указывают на
                        доброкачественный характер изменений.
                    </li>
                    <li className='!text-white'>
                        Любые неоднородные, быстро растущие или сомнительные образования требуют более глубокого
                        обследования (биопсии, маммографии, МРТ).
                    </li>
                    <li className='!text-white'>
                        Регулярное наблюдение у маммолога и следование врачебным рекомендациям — лучший способ сохранить
                        здоровье груди.
                    </li>
                </ul>
                <p className='!text-white text-left'>
                    Следите за своими результатами, не стесняйтесь задавать вопросы и помните, что ваш лечащий врач
                    – главный помощник и источник достоверных ответов. Внимательное отношение к здоровью молочных
                    желез – залог спокойствия и уверенности в завтрашнем дне!
                </p>
            </div>
        </div>
    );
};

export default Summary;
