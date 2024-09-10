interface ABHA_PROFILE {
    ABHANumber: string;
    preferredAbhaAddress: string;
    mobile: string;
    firstName: string;
    middleName: string;
    lastName: string;
    name: string;
    yearOfBirth: string;
    dayOfBirth: string;
    monthOfBirth: string;
    gender: string;
    email: string;
    profilePhoto: string;
    status: string;
    stateCode: string;
    districtCode: string;
    pincode: string;
    address: string;
    kycPhoto: string;
}
declare const getAbhaProfile: (options: {
    xToken: string;
    accessToken: string;
}) => Promise<ABHA_PROFILE>;
export default getAbhaProfile;
//# sourceMappingURL=getAbhaProfile.d.ts.map