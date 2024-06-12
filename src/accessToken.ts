import axios from "axios"
export const accessToken = async()=>{

    try {
        let data = JSON.stringify({
            "clientId": process.env.NDHM_CLIENT_ID,
            "clientSecret": process.env.NDHM_CLIENT_SECRET
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NDHM_URL}gateway/v0.5/sessions`,
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

export default accessToken
