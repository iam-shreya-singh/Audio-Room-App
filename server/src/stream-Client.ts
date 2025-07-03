import {StreamClient} from "@stream-io/node-sdk";

const apiKey = "gj7xkg2qyq68";
const apiSecret = 
    "4885f96x9v256673bzwdnkq4bucdfyq4k3j2ej7w8qf82sczmy2rf95tcjudrbvq";

export const Client = new StreamClient(apiKey, apiSecret);