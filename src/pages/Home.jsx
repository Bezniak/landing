import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import Description from "../components/Description/Description.jsx";
import Structure from "../components/Structure/Structure.jsx";
import Diseases from "../components/Diseases/Diseases.jsx";
import Selfexamination from "../components/Selfexamination/Selfexamination.jsx";
import RiskFactors from "../components/RiskFactors/RiskFactors.jsx";
import DiagnosticMethods from "../components/DiagnosticMethods/DiagnosticMethods.jsx";
import BreastHealthTips from "../components/BreastHealthTips/BreastHealthTips.jsx";
import AdditionalFacts from "../components/AdditionalFacts/AdditionalFacts.jsx";
import Conclusion from "../components/Conclusion/Conclusion.jsx";
import HelmetWrapper from "../common/HelmetWrapper.jsx";

const Home = () => {
    return (
        <>
            <HelmetWrapper
                title="Здоровье молочных желез: советы по профилактике и диагностике"
                description="Узнайте, как заботиться о здоровье молочных желез: основные заболевания, методы диагностики, самообследование и профилактика. Важная информация для каждой женщины."
                keywords="молочные железы, здоровье груди, рак груди, профилактика заболеваний груди, самообследование, маммография, диагностика груди, женское здоровье, узлы в груди, лечение мастопатии"
            />
            <div>
                <Slider/>
                <Description/>
                <Structure/>
                <Diseases/>
                <Selfexamination/>
                <RiskFactors/>
                <DiagnosticMethods/>
                <BreastHealthTips/>
                <AdditionalFacts/>
                <Conclusion/>
            </div>
        </>
    );
};

export default Home;