interface OTP_RESPONSE {
    txnId: string;
    message: string;
}
declare const getAadharOtp: (adharNumber: string, accessToken: string) => Promise<OTP_RESPONSE>;
export default getAadharOtp;
//# sourceMappingURL=getAadharOtp.d.ts.map