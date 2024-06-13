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
const accessToken_1 = require("../accessToken");
const m1_encrypt_1 = __importDefault(require("../encrypts/m1-encrypt"));
const enrolByAadharVerification = (options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const encryptedData = yield (0, m1_encrypt_1.default)(options.otp);
        const token = yield (0, accessToken_1.accessToken)();
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
                "REQUEST-ID": (0, uuid_1.v4)(),
            },
            data: data,
        };
        const result = yield axios_1.default.request(config);
        return JSON.stringify(result.data);
    }
    catch (error) {
        throw error.response.data;
    }
});
exports.default = enrolByAadharVerification;
//# sourceMappingURL=enrollByAadharOtp.js.map