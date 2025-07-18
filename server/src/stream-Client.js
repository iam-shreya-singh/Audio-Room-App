"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const node_sdk_1 = require("@stream-io/node-sdk");
const apiKey = "jqsrse48fsqz";
const apiSecret = "mft74cu2s29g2tdaygasztqhgfvxzyfk9hbmscay997uay9kuhrdj5jhfnbrruar";
exports.Client = new node_sdk_1.StreamClient(apiKey, apiSecret);
