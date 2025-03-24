import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';

const HelmetWrapper = ({title, description, keywords}) => {
    // Используем useEffect для обновления title и meta-тегов после рендера компонента
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]); // Заголовок будет обновляться при изменении title

    return (
        <Helmet>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            {/* Мы уже обновляем title через useEffect, но также можем указать его в Helmet */}
            <title>{title}</title>
        </Helmet>
    );
};

export default HelmetWrapper;
