import {StreamClient} from "@stream-io/node-sdk";

const apiKey = "jqsrse48fsqz";
const apiSecret = 
    "mft74cu2s29g2tdaygasztqhgfvxzyfk9hbmscay997uay9kuhrdj5jhfnbrruar";

export const Client = new StreamClient(apiKey, apiSecret);