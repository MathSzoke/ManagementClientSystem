const apiUrl = 'http://localhost:3333/';
const headers = {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*'}

const postApiData = async (endpoint, data) => {
    const url = `${apiUrl}${endpoint}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    });
    return response.json();
};

const getApiData = async (endpoint) =>
{
    const url = `${apiUrl}${endpoint}`;
    const response = await fetch(url,
    {
        headers: headers,
    });
    return response.json();
};

export {postApiData, getApiData};
