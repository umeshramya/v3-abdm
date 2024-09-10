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
const createAbha = (options) => __awaiter(void 0, void 0, void 0, function* () {
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
                "REQUEST-ID": (0, uuid_1.v4)(),
                TIMESTAMP: new Date().toISOString(),
                "Content-Type": "application/json",
                Authorization: `Bearer ${options.accessToken}`,
            },
            data,
        };
        const response = yield axios_1.default.request(config);
        return response.data;
    }
    catch (error) {
        console.error("Failed to create new Abha Address", error.message || error);
        throw new Error("Failed to create new Abha Address");
    }
});
exports.default = createAbha;
//# sourceMappingURL=createAbha.js.map