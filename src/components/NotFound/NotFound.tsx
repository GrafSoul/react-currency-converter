import React from 'react';

import classes from './NotFound.module.scss';

const NotFound: React.FC = () => {
    return (
        <div className={classes.notFound}>
            <h1 className={classes.errorText}>Ошибка 404 - Страница не найдена!</h1>
        </div>
    );
};

export default NotFound;
