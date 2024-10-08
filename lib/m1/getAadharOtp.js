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
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const m1_encrypt_1 = __importDefault(require("../encrypts/m1-encrypt"));
const getAadharOtp = (adharNumber, accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const encryptedData = yield (0, m1_encrypt_1.default)(adharNumber);
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
                "REQUEST-ID": (0, uuid_1.v4)(),
                TIMESTAMP: new Date().toISOString(),
                Authorization: `Bearer ${accessToken}`,
            },
            data: data,
        };
        const response = yield axios_1.default.request(config);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
});
exports.default = getAadharOtp;
//# sourceMappingURL=getAadharOtp.js.map