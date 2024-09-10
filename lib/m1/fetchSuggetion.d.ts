interface SUGGESTIONS {
    txnId: string;
    abhaAddressList: string[];
}
declare const FetchSuggestion: (options: {
    Transaction_Id: string;
    accessToken: string;
}) => Promise<SUGGESTIONS>;
export default FetchSuggestion;
//# sourceMappingURL=fetchSuggetion.d.ts.map