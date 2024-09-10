const { syncBuiltinESMExports } = require("module")
const lib = require("../lib/index")
require ("dotenv").config()

const accesToken = `eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBbFJiNVdDbThUbTlFSl9JZk85ejA2ajlvQ3Y1MXBLS0ZrbkdiX1RCdkswIn0.eyJleHAiOjE3MjU5MzU1NzUsImlhdCI6MTcyNTkzNDM3NSwianRpIjoiZmRjNmQ3Y2QtZmUyZC00ZGM5LWFlNzYtMGU1NzlmY2Y2MWM5IiwiaXNzIjoiaHR0cHM6Ly9kZXYubmRobS5nb3YuaW4vYXV0aC9yZWFsbXMvY2VudHJhbC1yZWdpc3RyeSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJmYWZkNjA3YS1lZjAwLTQzM2MtYTQ4ZC1jOWJjMDcwNDkyNGUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJTQlhfMDAwNjc2Iiwic2Vzc2lvbl9zdGF0ZSI6IjQ0MWEyODJhLTJjOWQtNDEyYy05MmUxLTE1NzU0YWZjOGNkZSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo5MDA3Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJoaXUiLCJvZmZsaW5lX2FjY2VzcyIsImhlYWx0aElkIiwiaGlwIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiU0JYXzAwMDY3NiI6eyJyb2xlcyI6WyJ1bWFfcHJvdGVjdGlvbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImNsaWVudElkIjoiU0JYXzAwMDY3NiIsImNsaWVudEhvc3QiOiIxMDAuNjUuMTYwLjIxNCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LXNieF8wMDA2NzYiLCJjbGllbnRBZGRyZXNzIjoiMTAwLjY1LjE2MC4yMTQifQ.kvjeOsUffM5heEwwS9UGtyS4_LmLarcsB1y5yQWTGX2_557sTAhFmOJDyqaeZPrkj7lzhgziQXtHbajMNoQPHofI6TL3v22J1b7kV8HVjOsPPi6VoO8w0zJvR3aQoY06y-cRWDxexwhjaL7zTbS_71R-TAvFn1ytbEo-pUJlc4RMlawq6RFUvRU60nqg1IYfoWdwb2yzpXjrl7KzHUSIsLbLwtut99FS8cTzZegqNU3LDlBe38axn59D_Kz89pt9yGJNdsr_XRYsWXgk1cO07p0StrvGgEv1fpWSFRFbQGApAexa67hefjepoauKodNzbVQbZpfR2q9jkXIY67EYNg`
const getOtp =async()=>{
    try {
        result = await lib.getAaDharOtp('514790474721', accesToken)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}


const getEnrollByAadharOtp = async()=>{
    try {
        result = await lib.enrolByAadharVerification({
            mobile : "9343403620",
            "txnId" : "1f417553-6fe6-4018-810d-c08fa5692a23",
            "otp" : "432417",
            "accessToken" : accesToken
        })
        console.log(result)
    } catch (error) {
        console.log(error)
    }

}


const getAbhaSuggestions = async()=>{
    try {
        const result = await lib.fetchSuggestion({
            "Transaction_Id" : "1f417553-6fe6-4018-810d-c08fa5692a23",
            "accessToken" : accesToken
        })

        console.log(result)
    } catch (error) {
        console.log(error.response)
    }
}


const getProfile = async ()=>{
    try {
        const result = await lib.getAbhaProfile({
            xToken : `eyJhbGciOiJSUzUxMiJ9.eyJpc0t5Y1ZlcmlmaWVkIjp0cnVlLCJzdWIiOiI5MS03MTEzLTU3NjctODYwOCIsImNsaWVudElkIjoiYWJoYS1wcm9maWxlLWFwcC1hcGkiLCJzeXN0ZW0iOiJBQkhBLU4iLCJhY2NvdW50VHlwZSI6InN0YW5kYXJkIiwibW9iaWxlIjoiOTM0MzQwMzYyMCIsImFiaGFOdW1iZXIiOiI5MS03MTEzLTU3NjctODYwOCIsInByZWZlcnJlZEFiaGFBZGRyZXNzIjoic3VtYTMzMzMzMzM2MjBAc2J4IiwidHlwIjoiVHJhbnNhY3Rpb24iLCJleHAiOjE3MjU5MzU0NDksImlhdCI6MTcyNTkzMzY0OSwidHhuSWQiOiIxZjQxNzU1My02ZmU2LTQwMTgtODEwZC1jMDhmYTU2OTJhMjMifQ.mRDop493Ier0T6Yilm420xxHi8ra-PB-gAfGlAKsBiZtHxnesVDMyqqFPaMMFemLtxjSlfM7s0NI8W67feyrb5qMjlXPCYWfi-YRfMEWOoTbYFPDgqFztfuc_X1HU2fv3aOB4gsUHQokMv6FYA9z-Nf1BG3p2VdxXJN0w9tjy_pZGOdlIKR3fqqmWMnw-htgUp2eiQAv143C1Inhb8_uAjZNkMewOQvphMSfj2AY3X-7h6dNCBdVg_lOCTlaIdn0xPQmJn2h-ApipZNoMQmqY1sitHF-MRHsPE3_wl93LLWWk-DfTjdrCrNoImnHZhuXvSkhZ20n7EueQRtPUWKh87Qsr8ghH9vjwVubw3wN1etiBdyGVqivkZPQEIM39xRNDopPkAcYCr3PZ3NxKkcOjPzD8O4EpqHosBqzGxfwVrNfIZHU_dfmTiXgD1DDXJslia1GaB4kX8FuiCjcWzCKW6lWNKAu1wu0fDxE95AyOYjNQTBtj0RFeMsArLd6tE9CtObiX578fubM4SG4hHkJJkBsCdPTYYs1bLOFdlkl3B617paqKOyGk_QnYUVSjDCa2UOOdHov213BABxSWs2DHk5HshAfrpm3ZKhAw4bMQWw54uwLf6KW-TjywJOwPtV9mzURO86ORxjTO83wQoXOPyOyqpfEWfAQ5PhEJJg2TOU`,
            accessToken : accesToken
        })

        console.log(JSON.stringify(result))
    } catch (error) {
        console.log(error)
    }
}


// getOtp()
// getEnrollByAadharOtp()
// getAbhaSuggestions()
getProfile()