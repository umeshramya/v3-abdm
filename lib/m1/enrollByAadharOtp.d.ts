interface TokenDetails {
    token: string;
    expiresIn: number;
    refreshToken: string;
    refreshExpiresIn: number;
}
interface ABHAProfile {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    gender: string;
    photo: string;
}
interface ENROL_BY_AADHAR_VERIFICATION {
    message: string;
    txnId: string;
    tokens: TokenDetails;
    ABHAProfile: ABHAProfile;
}
declare const enrolByAadharVerification: (options: {
    txnId: string;
    mobile: string;
    otp: string;
    accessToken: string;
}) => Promise<ENROL_BY_AADHAR_VERIFICATION>;
export default enrolByAadharVerification;
//# sourceMappingURL=enrollByAadharOtp.d.ts.map