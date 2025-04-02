import React from 'react';

const ModalWindow = ({closeModal}) => {

    // Обработчик клика по кнопке "Купить"
    const handleBuyButtonClick = () => {
        // Получаем ID из переменной окружения
        const yandexMetrikaId = import.meta.env.VITE_YANDEX_METRIKA_ID;

        // Отправка события в Яндекс.Метрику
        if (yandexMetrikaId) {
            ym(yandexMetrikaId, 'reachGoal', 'pharmacy_button_click');
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.7)] flex justify-center items-center"
            onClick={closeModal} // Закрытие модального окна при клике на фон
        >
            <div
                className="relative p-4 md:w-1/2 max-h-[90vh] bg-white rounded-lg"
                onClick={(e) => e.stopPropagation()} // Предотвращение закрытия при клике внутри модалки
            >
                {/* Содержимое модального окна */}
                <div className="relative bg-white rounded-lg mb-2">
                    {/* Заголовок модального окна */}
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="text-gray-400 absolute top-6 right-3 bg-transparent cursor-pointer hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            onClick={closeModal} // Закрытие модалки
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <img src="/lycomatFarmacy.png" alt="lycomat"/>

                    {/* Кнопка "Купить" с обработчиком клика */}
                    <a
                        href="https://tabletka.by/result/?ls=104159"
                        target="_blank"
                        className="text-white tracking-widest mb-5 uppercase mx-auto w-fit !font-medium block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition cursor-pointer focus:ring-4 focus:outline-none rounded-lg text-sm px-12 py-3 text-center"

                        onClick={handleBuyButtonClick} // Отправка события при клике
                    >
                        Купить
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
