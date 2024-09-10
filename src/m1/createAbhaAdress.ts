import axios from "axios";
import { v4 } from "uuid";


const CreateAbhaAddress = async(options:{
  "txnId": string,
  "abhaAddress": "umeshbilagi.1969",
  accessToken :string

})=>{

  let data = JSON.stringify({
    "txnId": options.txnId,
    "abhaAddress": options.abhaAddress,
    "preferred": 1
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${process.env.ABHA_BASE_URL_v3}/enrollment/enrol/abha-address`,
    headers: { 
      'REQUEST-ID': v4(), 
      'TIMESTAMP': new Date().toISOString(), 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${options.accessToken}`    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    return response.data
  })
  .catch((error) => {
    console.log(error);
  });
  

}


export default CreateAbhaAddress
