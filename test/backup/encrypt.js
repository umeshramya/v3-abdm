const crypto = require('crypto');
const { default: axios } = require('axios');

const encrypt = async(data) => {
  try {
    const response = await axios.get('https://healthidsbx.abdm.gov.in/api/v1/auth/cert');
    const publicKeyPem = response.data; // Extract the PEM from the response
    const encryptedData = crypto.publicEncrypt(
      {
        key: publicKeyPem,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha1' // Consider using 'sha256' or 'sha3' for stronger security
      },
      Buffer.from(data)
    );
    return encryptedData.toString('base64'); // Base64 encode for easier transmission
  } catch (error) {
    console.error('Encryption error:', error);
    return null;
  }
};

module.exports = { encrypt };
