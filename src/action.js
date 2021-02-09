import axios from 'axios';

export const fetchData = (data) => ({
    type: "FETCH_DATA",
    payload: {data}
})

function requestApi () {
    const _url = "https://jsonplaceholder.typicode.com/users";
    return axios.get(_url);
}

export const requestData = () => (dispatch) => {
    return requestApi().then(res => dispatch(fetchData(res)))
}