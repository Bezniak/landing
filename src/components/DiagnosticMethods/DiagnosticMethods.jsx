import React from 'react';
import {Accordion} from 'flowbite-react';

const DiagnosticMethods = () => {
    return (
        <div className="mx-auto p-5 py-10 overflow-x-hidden">
            <h1 className="text-4xl text-center mb-8">Методы диагностики заболеваний груди</h1>

            <Accordion flush>
                <Accordion.Panel>
                    <Accordion.Title>
                        <span className="text-lg font-semibold text-green-800">УЗИ (ультразвуковое исследование)</span>
                    </Accordion.Title>
                    <Accordion.Content>
                        <ul className="list-disc pl-5">
                            <li>Рекомендуется женщинам до 40 лет ежегодно и при наличии любых тревожных симптомов.</li>
                            <li>Позволяет оценить состояние тканей, обнаружить кисты, фиброаденомы и другие
                                образования.
                            </li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                        <span className="text-lg font-semibold text-green-800">Маммография</span>
                    </Accordion.Title>
                    <Accordion.Content>
                        <ul className="list-disc pl-5">
                            <li>«Золотой стандарт» для женщин старше 40–45 лет.</li>
                            <li>Проводится обычно 1 раз в год или 1 раз в 2 года (зависит от рекомендаций врача и
                                индивидуальных факторов риска).
                            </li>
                            <li>Может обнаружить микрокальцинаты и небольшие опухоли, невидимые на УЗИ.</li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                        <span
                            className="text-lg font-semibold text-green-800">МРТ (магнитно-резонансная томография)</span>
                    </Accordion.Title>
                    <Accordion.Content>
                        <ul className="list-disc pl-5">
                            <li>Используется при высоком риске развития рака (например, при наследственной
                                предрасположенности) или для уточнения диагноза, если результаты УЗИ и маммографии
                                противоречивы.
                            </li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                        <span className="text-lg font-semibold text-green-800">Пункция или биопсия</span>
                    </Accordion.Title>
                    <Accordion.Content>
                        <ul className="list-disc pl-5">
                            <li>Выполняется при обнаружении подозрительных образований для точного определения их
                                природы (доброкачественная или злокачественная).
                            </li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                        <span className="text-lg font-semibold text-green-800">Цитологическое и гистологическое исследование</span>
                    </Accordion.Title>
                    <Accordion.Content>
                        <ul className="list-disc pl-5">
                            <li>Исследование клеток и тканей, полученных при пункции/биопсии, под микроскопом.</li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>

            <p className="mt-6 text-sm text-gray-500">
                Важный момент: выбор метода диагностики всегда остаётся за врачом, исходя из возраста пациентки, её
                индивидуальной истории и предположительного диагноза.
            </p>
        </div>
    );
};

export default DiagnosticMethods;
