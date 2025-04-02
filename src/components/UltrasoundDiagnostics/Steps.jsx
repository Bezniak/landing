import React from 'react';
import {Parallax} from "react-scroll-parallax";


const steps = [
    {
        number: "1",
        title: "Изучите заключение",
        description:
            "Если какие-то формулировки непонятны, выпишите их или сделайте фото, чтобы задать вопросы специалисту."
    },
    {
        number: "2",
        title: "Запланируйте визит к маммологу",
        description:
            "Особенно если в заключении указаны нетипичные образования, кисты с подозрительными признаками, узлы или признаки воспаления."
    },
    {
        number: "3",
        title: "Сохраните все результаты",
        description:
            "Включая фото или диск – это может быть полезно для последующих консультаций и динамического наблюдения."
    },
    {
        number: "4",
        title: "Следуйте рекомендациям",
        description:
            "Если врач советует дополнительные тесты (биопсию, маммографию и т.д.), не откладывайте обследование. Раннее выявление проблем – ключ к успешному лечению."
    }
];


const Steps = () => {
    return (

        <div className="relative h-screen">
            <Parallax className="absolute inset-0 z-0" translateY={[-10, 10]}>
                <div className="bg-[url('/bg_medicine.jpg')] bg-cover bg-no-repeat h-full w-full"></div>
            </Parallax>
            {/* Content block, above the background */}
            <div className="space-y-6 mt-10 relative z-10">
                <h2 className="text-4xl mb-10 pt-10 text-center">
                    Что делать после УЗИ?
                </h2>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="container mx-auto flex items-center bg-transparent p-6 rounded-2xl"
                    >
                        <div
                            className="flex items-center justify-center w-14 h-14 p-5 border border-gray-300 bg-[var(--green)] text-gray-900 font-bold text-2xl rounded-full">
                            {step.number}
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;