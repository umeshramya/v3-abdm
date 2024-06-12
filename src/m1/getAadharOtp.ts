import axios from "axios";
import { v4 } from "uuid";
import { accessToken } from "../accessToken";
import encrypt from "../encrypts/m1-encrypt"

const getAadharOtp = async (adharNumber:string) => {
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
      url: `${process.env.ABHA_BASE_URL_v3}/enrollment/request/otp`,
      headers: {
        "Content-Type": "application/json",
        "REQUEST-ID": v4(),
        TIMESTAMP: new Date().toISOString(),
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    return (await axios.request(config)).data
  } catch (error:any) {
    throw error.response.data
  }
};

export default getAadharOtp