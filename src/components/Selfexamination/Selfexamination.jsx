import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Parallax} from "react-scroll-parallax";

export const StepCard = ({Icon, title, steps}) => {
    const {ref, inView} = useInView({
        triggerOnce: false, // Ensures animation triggers every time it enters the view
        threshold: 0.3, // Trigger animation when 30% of the component is in the view
    });

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
            transition={{duration: 1}}
            className="bg-white"
        >
            <img src={Icon} alt={title} className='w-full'/>
            <h5 className="my-3 text-2xl font-semibold tracking-tight text-gray-900 ">
                {title}
            </h5>
            <ul className="text-lg font-normal text-gray-500">
                {steps.map((step, index) => (
                    <li key={index} className="text-left mb-2">
                        {step}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const Selfexamination = () => {
    const steps = [
        {
            icon: '/lycomat_12.png',
            title: "Пальпация лёжа",
            steps: [
                "Лягте на спину, положив одну руку за голову, а другой рукой ощупывайте противоположную грудь.",
                "Это положение помогает более равномерно распределить ткань молочной железы и заметить изменения."
            ]
        },
        {
            icon: '/lycomat_13.png',
            title: "Пальпация (ощупывание) стоя",
            steps: [
                "Подушечками пальцев аккуратно ощупывайте грудь по кругу, двигаясь от внешнего края груди к соску.",
                "Проверьте, нет ли уплотнений, узелков или болезненных участков."
            ]
        },
        {
            icon: '/lycomat_0.png',
            title: "Осмотр перед зеркалом",
            steps: [
                "Встаньте прямо, опустив руки, и осмотрите грудь на изменения формы, цвета или текстуры кожи. Затем поднимите руки и проверьте втяжение кожи, соска, «апельсиновую корку» и необычные складки.",
            ]
        },
        {
            icon: '/lycomat_14.png',
            title: "Проверка сосков",
            steps: [
                "Слегка сожмите сосок, чтобы проверить, нет ли выделений (кровянистых, прозрачных или гнойных)."
            ]
        }
    ];

    return (
        <div className="container mx-auto py-10 p-5">
            <h2 className="text-3xl md:text-4xl mb-5">Самообследование молочных желез</h2>
            <p className="mb-10">
                Регулярное самообследование – простая, но важная практика, позволяющая вовремя заметить возможные
                изменения. Рекомендуется проводить его ежемесячно, примерно через 5–10 дней после начала менструации
                (когда гормональный фон наиболее стабилен и грудь менее отёчная).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {steps.map((step, index) => (
                    <StepCard key={index} Icon={step.icon} title={step.title} steps={step.steps}/>
                ))}
            </div>
            <div
                className='py-10 md:py-20 flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className='md:w-1/2'>
                    <h2 className="text-2xl md:text-4xl md:text-left">
                        Когда нужно обращаться к маммологу или гинекологу
                    </h2>
                    <ul className='mt-10 text-justify md:text-left'>
                        <li className='flex items-center gap-5 mb-3 text-lg text-gray-500'>
                            Обнаружение любых уплотнений или узелков, особенно если они не исчезают в течение нескольких
                            недель.
                        </li>
                        <li className='flex items-center gap-5 mb-3 text-lg text-gray-500'>
                            Постоянная боль или дискомфорт, не связанные с менструальным циклом.
                        </li>
                        <li className='flex items-center gap-5 mb-3 text-lg text-gray-500'>
                            Изменения кожи (покраснение, шелушение, втягивание) или формы соска.
                        </li>
                        <li className='flex items-center gap-5 mb-3 text-lg text-gray-500'>
                            Любые выделения из сосков (особенно кровянистые).
                        </li>
                        <li className='flex items-center gap-5 mb-3 text-lg text-gray-500'>
                            Возникновение резкой асимметрии или изменения формы груди.
                        </li>
                    </ul>
                    <p className='mt-10 !text-lg'>
                        <span className='text-red-500 font-semibold'>Важно:</span> &nbsp;
                        Самообследование не заменяет регулярные осмотры у специалиста и инструментальные методы
                        диагностики, но может помочь вовремя заметить настораживающие симптомы.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center overflow-hidden relative h-fit">
                    <Parallax translateY={[-50, 50]}>
                        <img src="/info2.png" alt="Когда нужно обращаться к маммологу или гинекологу"
                             className="md:max-w-xl h-auto object-cover rounded-full"/>
                    </Parallax>
                </div>
            </div>
        </div>
    );
};

export default Selfexamination;
