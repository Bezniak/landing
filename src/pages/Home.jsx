import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import Description from "../components/Description/Description.jsx";
import Structure from "../components/Structure/Structure.jsx";
import Diseases from "../components/Diseases/Diseases.jsx";
import Selfexamination from "../components/Selfexamination/Selfexamination.jsx";

const Home = () => {
    return (
        <div>
            <Slider />
            <Description/>
            <Structure/>
            <Diseases/>
            <Selfexamination/>
        </div>
    );
};

export default Home;