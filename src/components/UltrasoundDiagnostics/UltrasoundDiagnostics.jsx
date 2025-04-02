import React from 'react';
import {motion} from 'framer-motion'; // Import motion from framer-motion
import Terms from "./Terms.jsx";
import Findings from "./Findings.jsx";
import Steps from "./Steps.jsx";
import FAQAccordion from "./FAQAccordion.jsx";
import Summary from "./Summary.jsx";
import MetaTags from "../../common/MetaTags.jsx";


const faqItems = [
    {
        question: "У меня нашли «простую кисту» размером 10 мм, это опасно?",
        answer: "Простые кисты, как правило, доброкачественные. Большинство небольших кист не требуют лечения, только наблюдения. Врач может назначить повторное УЗИ через 6–12 месяцев, чтобы убедиться, что киста не растёт и не изменяется."
    },
    {
        question: "Может ли фиброаденома превратиться в рак?",
        answer: "Фиброаденомы крайне редко перерождаются в злокачественные опухоли. Обычно их удаляют только при быстром росте, подозрительных признаках или из эстетических соображений. Окончательное решение принимает врач после дополнительных исследований."
    },
    {
        question: "На УЗИ написано «фиброзно-кистозные изменения», но врач сказал, что это не страшно. Это правда?",
        answer: "Фиброзно-кистозная мастопатия – одно из самых распространённых доброкачественных изменений. Оно не является «серьёзным» заболеванием, но важно наблюдать динамику и вовремя проверяться у маммолога."
    },
    {
        question: "Нужно ли мне проходить маммографию, если я сделала УЗИ?",
        answer: "Зависит от возраста и рекомендаций врача. Обычно женщинам старше 40 лет советуют делать маммографию регулярно (раз в 1-2 года), а УЗИ дополняет эту диагностику. УЗИ может быть основным методом для более молодых женщин и при плотной структуре груди."
    }
];


const UltrasoundDiagnostics = () => {
    return (
        <>
            <MetaTags
                title="УЗИ молочных желез: расшифровка результатов и ключевые термины"
                description="Разбираем медицинские термины УЗИ молочной железы: эхогенность, кисты, фиброаденомы, мастопатию и другие находки. Узнайте, как понять заключение врача и когда стоит обратиться к маммологу."
                keywords="УЗИ молочной железы, эхогенность, кисты груди, фиброаденома, мастопатия, диагностика груди, женское здоровье, расшифровка УЗИ, маммология, профилактика заболеваний груди"
            />

            <div>
                <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center">
                    {/* Анимированное изображение */}
                    <motion.img
                        src="/page4.png"
                        alt="background slide"
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{scale: 2}}
                        animate={{scale: [1, 1.05, 1]}}
                        transition={{duration: 9, repeat: Infinity, ease: "easeInOut"}}
                    />

                    {/* Анимированный заголовок */}
                    <motion.h1
                        className="relative leading-18 z-10 text-white text-3xl md:text-5xl text-center w-[90%] mx-auto"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 2}}
                    >
                        Помощь по ультразвуковым диагнозам молочной железы: переводим с медицинского языка на понятный
                    </motion.h1>
                </div>
            </div>

            <motion.div
                className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 my-10 p-4 md:my-32'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 0.5}}
            >
                <motion.div className='flex-1' initial={{opacity: 0}} animate={{opacity: 1}}
                            transition={{duration: 1, delay: 1}}>
                    <p>
                        <span className='font-semibold'>Ультразвуковое исследование (УЗИ) молочной железы</span> –
                        один
                        из ключевых методов диагностики для женщин
                        любого возраста. Однако заключения, которые выдают врачи, часто наполнены медицинскими
                        терминами,
                        вызывающими недоумение у пациентов. В этом коротком гиде мы разберём наиболее распространённые
                        выражения и диагнозы, которые могут встретиться в вашем УЗИ-протоколе.
                    </p>
                </motion.div>
                <motion.div className='flex-1' initial={{opacity: 0}} animate={{opacity: 1}}
                            transition={{duration: 1, delay: 1.2}}>
                    <p>
                        <span className='font-semibold text-red-500'>Важно:</span> данный материал носит лишь
                        ознакомительный характер и не отменяет визит к специалисту. Всегда обсуждайте результаты УЗИ с
                        маммологом или лечащим врачом.
                    </p>
                </motion.div>
            </motion.div>

            {/* The rest of your sections */}
            <Terms/>
            <Findings/>
            <Steps/>
            <FAQAccordion faqItems={faqItems}/>
            <Summary/>
        </>
    );
};

export default UltrasoundDiagnostics;
