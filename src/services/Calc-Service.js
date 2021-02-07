import React, {Component} from 'react';
export class CalcService extends Component {
    _apiBase = 'https://data.techart.ru/lab/json/';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
        }
        
        return await res.json();
    }
}

export default CalcService;
