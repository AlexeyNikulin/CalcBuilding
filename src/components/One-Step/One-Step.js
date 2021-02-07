import React from 'react';
import {Link} from 'react-router-dom';

const OneStep = ({onSelectBuilding, onChangeStep, step, onCancel}) => {

    const onSelectItem = (building) => {
        onSelectBuilding(building);
        onChangeStep(++step);
    };

    return (
        <>
            <div className="calc-subtitle">Шаг {step}</div>
            <div className="calc-wrapper">
                <div className="title">Что будем строить?</div>
                <ul>
                    <li><Link to="/height" onClick={() => onSelectItem(1)}>Жилой дом</Link></li>
                    <li><Link to="/height" onClick={() => onSelectItem(2)}>Гараж</Link></li>
                </ul>
            </div>
            <div className="btns">
                <Link to="/"><button onClick={onCancel} className="btn-cancel">Отмена</button></Link>
                <button className="btn-next">Далее</button>
            </div>
        </>
    )
};

export default OneStep;
