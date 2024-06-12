const axios = require("axios");
const { v4 } = require("uuid");
const { accessToken } = require("./accessToken");
const { encrypt } = require("./encrypt");

const otp = async (adharNumber) => {
  try {
    const encryptedData = await encrypt(adharNumber)
    const token = await accessToken();
    let data = JSON.stringify({
      txnId: "",
      scope: ["abha-enrol"],
      loginHint: "aadhaar",
      loginId: encryptedData,
      otpSystem: "aadhaar",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://abhasbx.abdm.gov.in/abha/api/v3/enrollment/request/otp",
      headers: {
        "Content-Type": "application/json",
        "REQUEST-ID": v4(),
        TIMESTAMP: new Date().toISOString(),
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    return (await axios.request(config)).data
  } catch (error) {
    console.log(error.response.data);
  }
};

module.exports = { otp };
