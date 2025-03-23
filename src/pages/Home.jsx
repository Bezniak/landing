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

const Home = () => {
    return (
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
    );
};

export default Home;