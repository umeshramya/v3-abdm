interface AbhaOptions {
    txnId: string;
    abhaAddress: string;
    accessToken: string;
}
interface RESPONSE {
    txnId: string;
    healthIdNumber: string;
    preferredAbhaAddress: string;
}
declare const createAbha: (options: AbhaOptions) => Promise<RESPONSE>;
export default createAbha;
//# sourceMappingURL=createAbha.d.ts.map