import React, {useState} from "react";
import {useForm} from "react-hook-form";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";

const TestForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const [result, setResult] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);

    const onSubmit = (data) => {
        const criticalQuestions = [1, 2, 3, 4];
        const recommendedQuestions = [5, 6, 7, 8, 9, 10];

        const hasCritical = criticalQuestions.some(q => data[`question${q}`] === "Да");
        const hasRecommended = recommendedQuestions.some(q => data[`question${q}`] === "Да");

        if (hasCritical) {
            setResult("Рекомендуется в ближайшее время пройти консультацию маммолога и ультразвуковое исследование молочных желез.");
        } else if (hasRecommended) {
            setResult("Рекомендуется плановая консультация маммолога или профилактическое обследование (УЗИ, маммография) в ближайшее время.");
        } else {
            setResult("Поводов для срочного обращения нет, но следите за своим здоровьем.");
        }

        // Отправка события в Яндекс.Метрику при отправке формы
        if (window.ym) {
            window.ym(import.meta.env.VITE_YANDEX_METRIKA_ID, 'reachGoal', 'form_submission');
        }

        // Показываем модальное окно через 4 секунды
        setTimeout(() => setIsModalOpen(true), 4000);
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}
                      className="bg-white p-8 rounded-xl shadow-2xl w-full my-20 md:w-1/2 mx-auto space-y-8 border-t-4 border-[var(--green)]">
                    <h2 className="text-3xl font-extrabold text-center text-[var(--green)] mb-10">
                        Анкета для консультации маммолога
                    </h2>
                    {questions.map((q, index) => (
                        <div key={index} className="flex flex-col border-b pb-4 mb-6">
                            <p className="mb-2 font-semibold text-gray-700">{q.question}</p>
                            <div className="space-y-3">
                                {q.options.map((option) => (
                                    <label key={option}
                                           className="flex items-center space-x-3 text-gray-600 text-lg cursor-pointer transition duration-300">
                                        <input
                                            type="radio"
                                            value={option}
                                            {...register(`question${index + 1}`, {required: "Обязательное поле"})}
                                            className="h-5 w-5"
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                            {errors[`question${index + 1}`] && (
                                <p className="text-red-500 text-sm mt-2">{errors[`question${index + 1}`].message}</p>
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="bg-[var(--green)] text-white px-6 py-3 rounded-full  w-full hover:bg-[var(--red)] transition-all cursor-pointer duration-300 ease-in-out transform hover:scale-105"
                    >
                        Узнать результат
                    </button>
                </form>
                <div
                    className="container p-5 text-center flex justify-center items-center mx-auto text-2xl font-semibold text-black">
                    {result}
                </div>
            </div>
            {/* Показываем модальное окно через 4 секунды */}
            {isModalOpen && <ModalWindow closeModal={closeModal}/>}
        </div>
    );
};

const questions = [
    {question: "Есть ли у Вас уплотнения, узелки или шишки в груди?", options: ["Да", "Нет"]},
    {question: "Ощущаете ли Вы болезненность, дискомфорт или чувство тяжести в груди?", options: ["Да", "Нет"]},
    {question: "Замечали ли Вы выделения из сосков?", options: ["Да", "Нет"]},
    {question: "Были ли у Вас изменения внешнего вида груди?", options: ["Да", "Нет"]},
    {
        question: "Были ли у Ваших близких родственников онкологические заболевания молочных желез?",
        options: ["Да", "Нет", "Не знаю"]
    },
    {question: "Проходили ли Вы УЗИ молочных желез или маммографию за последние 2 года?", options: ["Да", "Нет"]},
    {
        question: "Был ли ранее установлен диагноз «мастопатия» или другие заболевания молочных желез?",
        options: ["Да", "Нет"]
    },
    {question: "Принимаете ли Вы гормональные препараты?", options: ["Да", "Нет"]},
    {question: "Испытывали ли Вы травмы молочных желез в течение последнего года?", options: ["Да", "Нет"]},
    {question: "Ваш возраст старше 40 лет?", options: ["Да", "Нет"]},
];

export default TestForm;
