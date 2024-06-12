// index.js
const axios = require('axios');
const {accessToken} = require("./accessToken");
const { otp } = require('../request-otp');




const getToken = async () => {
    try {
        const result = await accessToken();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

const getotp = async () => {
    try {
        const result = await otp(`514790474721`);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};





// getToken()
getotp()

