import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

const TwoStep = ({house, step, onSelectHeight, onChangeStep, onCancel}) => {

    const [count, setCount] = useState(0)

    if (house === 2) {
        return <Redirect to="/material"/>
    }

    const onChange = (e) => {
		setCount(+e.target.value);
	}

    const onSelectItem = (count) => {
        onSelectHeight(count);
        onChangeStep(++step);
    };

    return (
        <>
            <div className="calc-subtitle">Шаг {step}</div>
            <div className="calc-wrapper">
                <div className="title">Количество этажей</div>
                <input 
                    onChange={onChange}
                    type="number" 
                    className="floors"/>
            </div>
            <div className="btns">
                <Link to="/"><button onClick={onCancel} className="btn-cancel">Отмена</button></Link>
                <Link to="/material"><button onClick={() => onSelectItem(count)} className="btn-next">Далее</button></Link>
            </div>
        </>
    )
};

export default TwoStep;