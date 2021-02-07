import React from 'react';
import {Link} from 'react-router-dom';

const Result = ({onChangeStep, data, onCancel}) => {

    const onSelectItem = () => {
        onChangeStep(1);
        onCancel();
    };

    let title, message, clazz;

    if (data) {
        title = data.result === "ok" ? 'Успешно' : 'Ошибка';
        message = data.message;
        clazz = data.result === "ok" ? 'success' : 'error';
    } else {
        message = 'Данные не были получены, поробуйте еще раз';
    }

    return (
        <>
            <div className="calc-subtitle">Результат расчета</div>
            <div className="calc-wrapper">
                <div className="title">{title}</div>
                <div className={clazz}>{message}</div>
            </div>
            <div className="btns">
                <Link to="/">
                    <button onClick={onSelectItem} className="btn-new-calc">Новый расчет</button>
                </Link>
            </div>
        </>
    )
};

export default Result;