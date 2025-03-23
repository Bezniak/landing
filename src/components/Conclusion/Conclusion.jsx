import React from 'react';
import { motion } from 'framer-motion';

export default function Conclusion() {
    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="bg-gradient-to-r mt-20 h-screen flex justify-center items-center from-pink-100 to-pink-200 text-black p-4 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            >
                <div className='container md:px-10 mx-auto'>
                    {/* Заголовок с анимацией появления и подъема */}
                    <motion.h2
                        className="text-4xl mb-10 text-center"
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Заключение
                    </motion.h2>

                    {/* Декоративные анимации в углах */}
                    <motion.div
                        className="absolute top-0 left-0 w-48 h-48 bg-white opacity-20 rounded-full animate-pulse"
                        initial={{ scale: 0.5, opacity: 0.3 }}
                        animate={{ scale: 1, opacity: 0.2 }}
                        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
                    ></motion.div>
                    <motion.div
                        className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-20 rounded-full animate-pulse"
                        initial={{ scale: 0.5, opacity: 0.3 }}
                        animate={{ scale: 1, opacity: 0.2 }}
                        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
                    ></motion.div>

                    {/* Текст с анимациями */}
                    <motion.p
                        className="mb-6 leading-relaxed text-justify"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    >
                        Знание особенностей строения и функционирования молочной железы, умение проводить регулярное самообследование и следование рекомендациям по профилактике — ключевые факторы поддержания женского здоровья.
                    </motion.p>
                    <motion.p
                        className="mb-6 leading-relaxed text-justify"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
                    >
                        Если вы обнаружили какие-либо подозрительные изменения или у вас есть факторы риска (наследственность, гормональные нарушения), не откладывайте визит к специалисту. Современные диагностические методы позволяют на ранних стадиях выявлять большинство заболеваний груди, что существенно повышает шансы на успешное лечение и полное восстановление.
                    </motion.p>
                    <motion.p
                        className="font-semibold leading-relaxed text-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
                    >
                        Заботьтесь о себе и регулярно уделяйте внимание здоровью молочных желез!
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}
