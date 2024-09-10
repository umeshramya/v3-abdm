
import crypto from "crypto"
import axios from "axios";

const encrypt = async(data:string) => {
  try {
    const response = await axios.get(process.env.ABDM_CERT_URL || "");
    const publicKeyPem = response.data; // Extract the PEM from the response
    const encryptedData = crypto.publicEncrypt(
      {
        key: publicKeyPem,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha1' 
      },
      Buffer.from(data)
    );
    return encryptedData.toString('base64'); // Base64 encode for easier transmission
  } catch (error) {
    console.error('Encryption error:', error);
    return null;
  }
};

export default encrypt

