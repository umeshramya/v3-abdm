import axios from "axios";
import { v4 } from "uuid";
import { accessToken } from "../accessToken";
import encrypt from "../encrypts/m1-encrypt"

const enrolByAadharVerification = async (options: {
  txnId: string;
  mobile: string;
  otp: string;
}) => {

  try {
    const encryptedData = await encrypt(options.otp)
    const token = await accessToken();
    let data = JSON.stringify({
      authData: {
        authMethods: ["otp"],
        otp: {
          timeStamp: new Date().toISOString(),
          txnId: options.txnId,
          otpValue: encryptedData,
          mobile: options.mobile,
        },
      },
      consent: {
        code: "abha-enrollment",
        version: "1.4",
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.ABHA_BASE_URL_v3}/enrollment/enrol/byAadhaar`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        TIMESTAMP: new Date().toISOString(),
        "REQUEST-ID": v4(),
      },
      data: data,
    };

    const result = await axios.request(config);
    return JSON.stringify(result.data);
  } catch (error: any) {
    throw error.response.data;
  }
};


export default enrolByAadharVerification