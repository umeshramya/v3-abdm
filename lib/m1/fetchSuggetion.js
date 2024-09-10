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
const FetchSuggestion = (options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${process.env.ABHA_BASE_URL_v3}/enrollment/enrol/suggestion`,
            headers: {
                Transaction_Id: options.Transaction_Id,
                "REQUEST-ID": (0, uuid_1.v4)(),
                TIMESTAMP: new Date().toISOString(),
                Authorization: `Bearer ${options.accessToken}`,
            },
        };
        const response = yield axios_1.default.request(config);
        return response.data; // Ensure it matches the interface
    }
    catch (error) {
        console.error(error);
        throw new Error("Failed to fetch suggestions");
    }
});
exports.default = FetchSuggestion;
//# sourceMappingURL=fetchSuggetion.js.map