"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const crypto = require('crypto');
const crypto_1 = __importDefault(require("crypto"));
const axios_1 = __importDefault(require("axios"));
const encrypt = (data_1, ...args_1) => __awaiter(void 0, [data_1, ...args_1], void 0, function* (data, abdmCertUrl = 'https://healthidsbx.abdm.gov.in/api/v1/auth/cert') {
    try {
        const response = yield axios_1.default.get(abdmCertUrl);
        const publicKeyPem = response.data; // Extract the PEM from the response
        const encryptedData = crypto_1.default.publicEncrypt({
            key: publicKeyPem,
            padding: crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha1' // Consider using 'sha256' or 'sha3' for stronger security
        }, Buffer.from(data));
        return encryptedData.toString('base64'); // Base64 encode for easier transmission
    }
    catch (error) {
        console.error('Encryption error:', error);
        return null;
    }
});
exports.default = encrypt;
//# sourceMappingURL=m1-encrypt.js.map