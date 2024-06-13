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
            "txnId" : "e0134fc4-4aab-4daf-b9e2-b91474c827b8",
            "otp" : "179099"
        })
        console.log(result)
    } catch (error) {
        console.log(error)
    }

}


// getAccessToken()
// getOtp()
// getEnrollByAadharOtp()