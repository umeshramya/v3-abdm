const lib = require("../lib/index")
require ("dotenv").config()

const getOtp =async()=>{
    try {
        result = await lib.getAaDharOtp('514790474721')
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

const getAccessToken  =async()=>{
    try {
        result = await lib.accesToken()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}


// getAccessToken()
getOtp()
