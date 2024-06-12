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
exports.accessToken = void 0;
const axios_1 = __importDefault(require("axios"));
const accessToken = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = JSON.stringify({
            "clientId": process.env.NDHM_CLIENT_ID,
            "clientSecret": process.env.NDHM_CLIENT_SECRET
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NDHM_URL}gateway/v0.5/sessions`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        const ret = yield axios_1.default.request(config);
        return ret.data.accessToken;
    }
    catch (error) {
    }
});
exports.accessToken = accessToken;
exports.default = exports.accessToken;
//# sourceMappingURL=accessToken.js.map