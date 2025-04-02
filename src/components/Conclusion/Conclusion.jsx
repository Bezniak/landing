import React from 'react';
import {motion} from 'framer-motion';

export default function Conclusion() {
    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="bg-gradient-to-r py-20 flex justify-center items-center from-red-900 to-red-700 text-black p-4 relative overflow-hidden"
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1.5, delay: 0.3, ease: "easeOut"}}
            >
                <div className='container md:px-10 mx-auto text-white text-center'>
                    {/* Заголовок с анимацией появления и подъема */}
                    <motion.h2
                        className="text-4xl mb-10 leading-11"
                        initial={{opacity: 0, y: -60}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, ease: "easeOut"}}
                    >
                        Заботьтесь о себе и регулярно уделяйте внимание <br/> здоровью молочных желез!
                    </motion.h2>

                    {/* Текст с анимациями */}
                    <motion.p
                        className="mb-6 leading-relaxed"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1.2, ease: "easeOut", delay: 0.5}}
                    >
                        Знание особенностей строения и функционирования молочной железы, умение проводить регулярное
                        самообследование и следование рекомендациям по профилактике — ключевые факторы поддержания
                        женского здоровья.
                    </motion.p>
                    <motion.p
                        className="mb-6 leading-relaxed"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1.2, ease: "easeOut", delay: 0.7}}
                    >
                        Если вы обнаружили какие-либо подозрительные изменения или у вас есть факторы риска
                        (наследственность, гормональные нарушения), не откладывайте визит к специалисту. Современные
                        диагностические методы позволяют на ранних стадиях выявлять большинство заболеваний груди, что
                        существенно повышает шансы на успешное лечение и полное восстановление.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}
