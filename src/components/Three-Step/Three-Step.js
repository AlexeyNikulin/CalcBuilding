import React from 'react';
import {Link} from 'react-router-dom';

const materialHouse = [
    {name: 'кирпич', id: 1}, 
    {name: 'шлакоблок', id: 2}, 
    {name: 'деревянный брус', id: 3},
];

const materialGarage = [
    {name: 'шлакоблок', id: 2}, 
    {name: 'металл', id: 4}, 
    {name: 'сендвич-панели', id: 5},
];

const ThreeStep = ({house, step, onSelectMaterial, onChangeStep, onCancel}) => {

    const items = house === 1 ? materialHouse : materialGarage;
    let maxId = 100;

    const onSelectItem = (material) => {
        onSelectMaterial(material);
        onChangeStep(++step);
    };

    return (
        <>
            <div className="calc-subtitle">Шаг {step}</div>
            <div className="calc-wrapper">
                <div className="title">Материал стен:</div>
                <ul>
                    {
                        items.map(item => {
                            maxId++;
                            return <li 
                                    key={maxId}
                                    onClick={() => onSelectItem(item.id)}><Link to="/size">{item.name}</Link></li>;
                        })
                    }
                </ul>
            </div>
            <div className="btns">
                <Link to="/"><button onClick={onCancel} className="btn-cancel">Отмена</button></Link>
                <button className="btn-next">Далее</button>
            </div>
        </>
    )
};

export default ThreeStep;