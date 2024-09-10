import axios from "axios";
import { v4 } from "uuid";

interface ABHA_PROFILE {
  ABHANumber: string;
  preferredAbhaAddress: string;
  mobile: string;
  firstName: string;
  middleName: string;
  lastName: string;
  name: string;
  yearOfBirth: string;
  dayOfBirth: string;
  monthOfBirth: string;
  gender: string;
  email: string;
  profilePhoto: string;
  status: string;
  stateCode: string;
  districtCode: string;
  pincode: string;
  address: string;
  kycPhoto: string;
}


const getAbhaProfile = async (options: {
  xToken: string;
  accessToken: string;
}): Promise<ABHA_PROFILE> => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.ABHA_BASE_URL_v3}/profile/account`,
      headers: {
        "X-token": `Bearer ${options.xToken}`,
        "REQUEST-ID": v4(),
        TIMESTAMP: new Date().toISOString(),
        Authorization: `Bearer ${options.accessToken}`,
      },
    };

    const response = await axios.request(config);
    return response.data as ABHA_PROFILE; // Ensure the response type matches the interface
  } catch (error) {
    console.error("Failed to fetch ABHA profile:", error);
    throw new Error("Error fetching ABHA profile");
  }
};

export default getAbhaProfile;
