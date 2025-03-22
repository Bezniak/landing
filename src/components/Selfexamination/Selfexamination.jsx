import React from 'react';
import {GiMirrorMirror} from 'react-icons/gi';
import {BsPersonStanding} from 'react-icons/bs';
import {PiCouchThin} from 'react-icons/pi';
import {IoBodySharp} from 'react-icons/io5';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {TiTick} from "react-icons/ti";

const StepCard = ({Icon, title, steps}) => {
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
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
            <Icon className="size-19 fill-green-200 mb-5"/>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <ul className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {steps.map((step, index) => (
                    <li key={index} className="text-sm text-justify mb-5">
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
            icon: GiMirrorMirror,
            title: "Осмотр перед зеркалом",
            steps: [
                "Станьте прямо с опущенными руками и внимательно посмотрите, нет ли изменений формы груди, асимметрии, изменений цвета или текстуры кожи.",
                "Поднимите руки вверх и снова осмотрите грудь. Обратите внимание на втяжение кожи или соска, появление «апельсиновой корки» и необычные складки."
            ]
        },
        {
            icon: BsPersonStanding,
            title: "Пальпация (ощупывание) стоя",
            steps: [
                "Подушечками пальцев аккуратно ощупывайте грудь по кругу, двигаясь от внешнего края груди к соску.",
                "Проверьте, нет ли уплотнений, узелков или болезненных участков."
            ]
        },
        {
            icon: PiCouchThin,
            title: "Пальпация лёжа",
            steps: [
                "Лягте на спину, положив одну руку за голову, а другой рукой ощупывайте противоположную грудь.",
                "Это положение помогает более равномерно распределить ткань молочной железы и заметить изменения."
            ]
        },
        {
            icon: IoBodySharp,
            title: "Проверка сосков",
            steps: [
                "Слегка сожмите сосок, чтобы проверить, нет ли выделений (кровянистых, прозрачных или гнойных)."
            ]
        }
    ];

    return (
        <div className="container mx-auto py-10 md:py-20 p-10">
            <h2 className="text-4xl mb-5 text-center">Самообследование молочных желез</h2>
            <p className="text-center leading-10 mx-auto">
                Регулярное самообследование – простая, но важная практика, позволяющая вовремя заметить возможные
                изменения. Рекомендуется проводить его ежемесячно, примерно через 5–10 дней после начала менструации
                (когда гормональный фон наиболее стабилен и грудь менее отёчная).
            </p>
            <h3 className="font-semibold text-2xl my-10">Шаги самообследования:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {steps.map((step, index) => (
                    <StepCard key={index} Icon={step.icon} title={step.title} steps={step.steps}/>
                ))}
            </div>
            <div>
                <h2 className="text-4xl mt-20  text-center">
                    Когда нужно обращаться к маммологу или гинекологу:
                </h2>
                <ul className='mt-10'>
                    <li className='flex items-center gap-5'>
                        <TiTick className='size-8 fill-green-200'/>
                        Обнаружение любых уплотнений или узелков, особенно если они не исчезают в течение нескольких
                        недель.
                    </li>
                    <li className='flex items-center gap-5'>
                        <TiTick className='size-8 fill-green-200'/>
                        Постоянная боль или дискомфорт, не связанные с менструальным циклом.
                    </li>
                    <li className='flex items-center gap-5'>
                        <TiTick className='size-8 fill-green-200'/>
                        Изменения кожи (покраснение, шелушение, втягивание) или формы соска.
                    </li>
                    <li className='flex items-center gap-5'>
                        <TiTick className='size-8 fill-green-200'/>
                        Любые выделения из сосков (особенно кровянистые).
                    </li>
                    <li className='flex items-center gap-5'>
                        <TiTick className='size-8 fill-green-200'/>
                        Возникновение резкой асимметрии или изменения формы груди.
                    </li>
                </ul>
                <p className='mt-10'>
                    <span className='text-red-500 font-semibold'>Важно:</span> Самообследование не заменяет регулярные
                    осмотры у специалиста и инструментальные методы диагностики, но может помочь вовремя заметить
                    настораживающие симптомы.
                </p>
            </div>
        </div>
    );
};

export default Selfexamination;
