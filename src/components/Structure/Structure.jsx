import React from 'react';
import {TiTickOutline} from 'react-icons/ti';
import {motion} from 'framer-motion';
import {Parallax} from 'react-scroll-parallax';

const textVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: 'easeOut'}}
};

const listItemVariants = {
    hidden: {opacity: 0, x: -30},
    visible: {opacity: 1, x: 0, transition: {duration: 0.5, ease: 'easeOut'}}
};

const Structure = () => {
    return (
        <div
            className="container mx-auto p-5 py-10 md:py-20 flex flex-col md:flex-row justify-between items-center gap-10">
            <motion.div
                className="md:w-1/2 md:px-10"
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.2}}
            >
                <ul>
                    <motion.span className="font-semibold text-3xl md:text-4xl" variants={textVariants}>
                        Строение и функции молочной железы
                    </motion.span>
                    <motion.li className="flex gap-4 items-start my-5 text-xl"
                               variants={listItemVariants}>
                        <TiTickOutline className="size-8 fill-[var(--red)] flex-shrink-0"/>
                        Железистая ткань отвечает за производство грудного молока и состоит из долек (альвеол) и
                        протоков, по которым молоко транспортируется к соскам.
                    </motion.li>
                    <motion.li className="flex gap-4 items-start my-5 text-xl"
                               variants={listItemVariants}>
                        <TiTickOutline className="size-8 fill-[var(--red)] flex-shrink-0"/>
                        Жировая ткань окружает железистую, придавая груди форму и объем.
                    </motion.li>
                    <motion.li className="flex gap-4 items-start my-5 text-xl"
                               variants={listItemVariants}>
                        <TiTickOutline className="size-8 fill-[var(--red)] flex-shrink-0"/>
                        Соединительная ткань обеспечивает поддержку и структурную целостность железы.
                    </motion.li>
                </ul>
                <motion.p className="text-left mt-10 my-5" variants={textVariants}>
                    Соотношение этих тканей может меняться в зависимости от возраста, фазы менструального цикла,
                    беременности, лактации, а также в период менопаузы. Например, в молодом возрасте железистая ткань
                    преобладает, а с возрастом её место постепенно занимает жировая.
                </motion.p>
                <motion.p className="text-left" variants={textVariants}>
                    Основные функции молочной железы – это выработка и выделение молока в период грудного вскармливания,
                    а также эндокринная регуляция (соучастие в выработке ряда гормонов).
                </motion.p>
            </motion.div>

            {/* Ограничиваем блок и создаем плавный вертикальный параллакс */}
            <div className="md:w-1/2 flex justify-center overflow-hidden relative h-fit">
                <Parallax translateY={[-50, 50]}>
                    <img src="/info1.png" alt="Строение и функции молочной железы" className="max-w-full h-auto object-cover rounded-full"/>
                </Parallax>
            </div>
        </div>
    );
};

export default Structure;
