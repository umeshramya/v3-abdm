import axios from "axios";
import { v4 } from "uuid";

interface SUGGESTIONS {
  txnId: string;
  abhaAddressList: string[];
}

const FetchSuggestion = async (options: {
  Transaction_Id: string;
  accessToken: string;
}): Promise<SUGGESTIONS> => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.ABHA_BASE_URL_v3}/enrollment/enrol/suggestion`,
      headers: {
        Transaction_Id: options.Transaction_Id,
        "REQUEST-ID": v4(),
        TIMESTAMP: new Date().toISOString(),
        Authorization: `Bearer ${options.accessToken}`,
      },
    };

    const response = await axios.request(config);
    return response.data as SUGGESTIONS; // Ensure it matches the interface
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch suggestions");
  }
};

export default FetchSuggestion;
