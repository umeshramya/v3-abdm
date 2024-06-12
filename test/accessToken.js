const axios = require('axios');
const accessToken = async()=>{
    try {
        let data = JSON.stringify({
            "clientId": "SBX_000676",
            "clientSecret": "8ec7c02e-46bd-4ff4-ab87-14c1ecd21343"
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://dev.abdm.gov.in/gateway/v0.5/sessions',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          const ret = await axios.request(config)
        
          return ret.data.accessToken
        
    } catch (error) {
        
    }
}

module.exports = { accessToken };
