import React from 'react';

const Mastopathy = () => {
    return (
        <div>
            <div
                className="container mx-auto h-full md:h-96 flex flex-col md:flex-row justify-between items-center gap-10 p-4">
                <h2 className="text-2xl text-center md:w-1/2 font-semibold text-gray-800 mb-4">Что такое
                    предменструальный мастопатический синдром?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    — это состояние, при котором у женщин перед началом менструации появляются боль, набухание и
                    повышенная чувствительность груди. Оно связано с регулярными гормональными изменениями в организме и
                    является одним из частых проявлений предменструального синдрома.
                </p>
            </div>

            <div className="">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 p-4">
                    <h2 className="text-2xl text-center md:w-full font-semibold text-gray-800 mb-4">Механизмы возникновения ПМС-мастопатии</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Основная причина болезненности молочных желез перед месячными — гормональный дисбаланс. Во второй половине цикла эстрогенов становится больше, а прогестерона меньше, из-за чего происходит застой жидкости в тканях молочной железы. В результате этого грудь становится отёчной, болезненной, чувствительной к прикосновениям и увеличивается в размерах. Симптомы обычно усиливаются за 7-10 дней до начала менструации и уменьшаются или исчезают с её началом.
                    </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mt-10">
                   <div className='container mx-auto text-center py-10'>
                       <p className="text-lg font-semibold text-gray-800">
                           Интересный факт:
                       </p>
                       <p className="text-lg text-gray-700 leading-relaxed">
                           Около 70-80% женщин в репродуктивном возрасте испытывают ту или иную степень болезненности груди перед месячными.
                       </p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Mastopathy;
