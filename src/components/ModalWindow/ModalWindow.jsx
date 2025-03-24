import React from 'react';
import {store} from "../../store/store.js";

const ModalWindow = ({closeModal}) => {
    return (
        <div
            className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.7)] flex justify-center items-center"
            onClick={closeModal} // Close the modal when clicking on the backdrop
        >
            <div
                className="relative p-4 md:w-1/2 max-h-[90vh] bg-white rounded-lg shadow-sm"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow-sm">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Купить в аптеках г {store[0].city}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            onClick={closeModal} // Close the modal
                        >
                            <svg
                                className="w-3 h-3"
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

                    {/* Modal body - pharmacy list */}
                    <div className="p-4 md:p-5 space-y-4 max-h-[60vh] overflow-y-auto">
                        <div className="space-y-2">
                            {store.slice(1).map((pharmacy) => (
                                <div key={pharmacy.id} className="border-b border-gray-300 pb-4">
                                    <h4 className="text-xl pb-2 font-semibold text-gray-900">
                                        {pharmacy.pharmacyName}
                                    </h4>
                                    <p className="text-sm text-black pb-3 font-light">{pharmacy.address}</p>
                                    <a
                                        href={pharmacy.pharmacyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 font-normal hover:underline"
                                    >
                                        Перейти на сайт
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modal footer */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <button
                            onClick={closeModal} // Close the modal
                            type="button"
                            className="text-black uppercase mx-auto bg-pink-300 hover:bg-pink-400 transition cursor-pointer focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-12 py-3 text-center"
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
