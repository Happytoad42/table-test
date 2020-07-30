// Emulate API, not delay because reasons
export const getApiData = () => {
    const apiData = require('./data.json');
    return apiData.data;
}