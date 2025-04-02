import React, {useEffect} from "react";
import {Helmet} from "react-helmet-async";
import PropTypes from "prop-types";

const MetaTags = ({title, description, keywords}) => {
    useEffect(() => {
        document.title = title; // Мгновенно обновляем заголовок страницы
    }, [title]); // Следим за изменением title

    return (
        <Helmet>
            <meta name="description" content={description}/>
            {keywords && <meta name="keywords" content={keywords}/>}
        </Helmet>
    );
};

// Проверка типов пропсов
MetaTags.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
};


// Значения по умолчанию
MetaTags.defaultProps = {
    title: "Заголовок страницы",
    description: "Описание страницы по умолчанию",
    keywords: "",
};

export default MetaTags;
