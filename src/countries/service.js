import fetch from 'isomorphic-fetch';

const url = 'https://restcountries.eu/rest/v2/all';

export const getData = () => {
    return fetch(url).then((res) => res.json());
}

export default {
    getData,
};

