import axios from "axios";
import { v4 as uuidv4 } from "uuid";

interface AbhaOptions {
  txnId: string;
  abhaAddress: string;
  accessToken: string;
}

interface RESPONSE {
  txnId: string;
  healthIdNumber: string;
  preferredAbhaAddress: string;
}

const createAbha = async (options: AbhaOptions): Promise<RESPONSE> => {
  try {
    const data = JSON.stringify({
      txnId: options.txnId,
      abhaAddress: options.abhaAddress,
      preferred: 1,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.ABHA_BASE_URL_v3}/enrollment/enrol/abha-address`,
      headers: {
        "REQUEST-ID": uuidv4(),
        TIMESTAMP: new Date().toISOString(),
        "Content-Type": "application/json",
        Authorization: `Bearer ${options.accessToken}`,
      },
      data,
    };

    const response = await axios.request(config);
    return response.data as RESPONSE;
  } catch (error: any) {
    console.error("Failed to create new Abha Address", error.message || error);
    throw new Error("Failed to create new Abha Address");
  }
};

export default createAbha;
