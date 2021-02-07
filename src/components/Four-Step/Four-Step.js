import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const FourStep = ({step, onSelectSize, onCancel}) => {

    const [sizex, setSizex] = useState(0)
    const [sizey, setSizey] = useState(0)

    const onChangeSizex = (e) => {
		setSizex(+e.target.value);
	}

    const onChangeSizey = (e) => {
		setSizey(+e.target.value);
	}

    const onSelectItem = (sizex, sizey) => {
        onSelectSize(sizex, sizey);
    };

    return (
        <>
            <div className="calc-subtitle">Шаг {step}</div>
            <div className="calc-wrapper">
                <div className="title">Длинна стен (в метрах):</div>
                <input onChange={onChangeSizex} type="number" className="floors"/>
                <span className="mult">X</span>
                <input onChange={onChangeSizey} type="number" className="floors"/>
            </div>
            <div className="btns">
                <Link to="/"><button onClick={onCancel} className="btn-cancel">Отмена</button></Link>
                <Link to="/success"><button onClick={() => onSelectItem(sizex, sizey)} className="btn-next">Расчитать</button></Link>
            </div>
        </>
    )
}

export default FourStep;
