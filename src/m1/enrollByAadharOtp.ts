import axios from "axios";
import { v4 } from "uuid";
import encrypt from "../encrypts/m1-encrypt"
interface TokenDetails {
  token: string;
  expiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
}

interface ABHAProfile {
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  gender: string;
  photo: string;
}

interface ENROL_BY_AADHAR_VERIFICATION {
  message: string;
  txnId: string;
  tokens: TokenDetails;
  ABHAProfile: ABHAProfile;
}


const enrolByAadharVerification = async (options: {
  txnId: string;
  mobile: string;
  otp: string;
  accessToken : string
}):Promise<ENROL_BY_AADHAR_VERIFICATION> => {

  try {
    const encryptedData = await encrypt(options.otp)
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
        Authorization: `Bearer ${options.accessToken}`,
        TIMESTAMP: new Date().toISOString(),
        "REQUEST-ID": v4(),
      },
      data: data,
    };

    console.log(config)

    const result = await axios.request(config);
    return JSON.stringify(result.data) as any;
  } catch (error: any) {
    throw error.response.data;
  }
};


export default enrolByAadharVerification