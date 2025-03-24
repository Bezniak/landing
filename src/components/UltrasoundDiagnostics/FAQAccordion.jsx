import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQAccordion = ({ faqItems }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.section
            className="my-12 p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h2 className="text-2xl font-semibold text-gray-800">Часто задаваемые вопросы о мастопатии</h2>
            <div className="mt-4 space-y-4 text-gray-700">
                {faqItems.map((item, index) => (
                    <div key={index} className='mb-5'>
                        <h2 id={`accordion-open-heading-${index + 1}`}>
                            <button
                                type="button"
                                className="flex items-center cursor-pointer justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-pink-200 rounded-t-xl hover:bg-pink-50 gap-5"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`accordion-open-body-${index + 1}`}
                            >
                                <span className="flex items-center">{item.question}</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 ${openIndex === index ? 'rotate-180' : ''} shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id={`accordion-open-body-${index + 1}`}
                            className={openIndex === index ? 'p-5 border border-pink-200' : 'hidden'}
                            aria-labelledby={`accordion-open-heading-${index + 1}`}
                        >
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default FAQAccordion;
