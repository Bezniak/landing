import React, {useState} from "react";
import {useForm} from "react-hook-form";

const TestForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const [result, setResult] = useState(null);

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
    };

    if (result) {
        return <div className="p-4 max-w-lg mx-auto text-lg font-semibold">{result}</div>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-lg mx-auto space-y-4">
            <h2 className="text-xl font-bold">
                Анкета для консультации маммолога
            </h2>
            {questions.map((q, index) => (
                <div key={index} className="flex flex-col border-b pb-2">
                    <p className="mb-1 font-semibold">{q.question}</p>
                    {q.options.map((option) => (
                        <label key={option} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                value={option}
                                {...register(`question${index + 1}`, {required: "Обязательное поле"})}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                    {errors[`question${index + 1}`] && (
                        <p className="text-red-500 text-sm">{errors[`question${index + 1}`].message}</p>
                    )}
                </div>
            ))}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Отправить
            </button>
        </form>
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
