"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const node_sdk_1 = require("@stream-io/node-sdk");
const apiKey = "gj7xkg2qyq68";
const apiSecret = "4885f96x9v256673bzwdnkq4bucdfyq4k3j2ej7w8qf82sczmy2rf95tcjudrbvq";
exports.Client = new node_sdk_1.StreamClient(apiKey, apiSecret);
