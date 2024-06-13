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

const getEnrollByAadharOtp = async()=>{
    try {
        result = await lib.enrolByAadharVerification({
            mobile : "9343403620",
            "txnId" : "1726dea3-4b99-4ff8-86d2-27acc5cb3798",
            "otp" : "194725"
        })
        console.log(result)
    } catch (error) {
        console.log(error)
    }

}


// getAccessToken()
// getOtp()
getEnrollByAadharOtp()