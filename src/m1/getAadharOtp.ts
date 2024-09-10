import axios from "axios";
import { v4 } from "uuid";
import encrypt from "../encrypts/m1-encrypt"


interface OTP_RESPONSE {
  txnId: string;
  message: string;
}


const getAadharOtp = async (adharNumber:string, accessToken:string):Promise<OTP_RESPONSE> => {
  try {
    const encryptedData = await encrypt(adharNumber)

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
      url: `${process.env.ABHA_BASE_URL_v3}/enrollment/request/otp`,
      headers: {
        "Content-Type": "application/json",
        "REQUEST-ID": v4(),
        TIMESTAMP: new Date().toISOString(),
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };
    const response = await axios.request(config)
    return response.data
  } catch (error:any) {
    throw error.response.data
  }
};

export default getAadharOtp