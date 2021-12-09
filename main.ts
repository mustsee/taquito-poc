import { App } from "./src/app";

// Url of a test network
const RPC_URL = "https://hangzhounet.api.tez.ie";

// Adress of the activated account
// pkh key in the activation file provided
const FAUCET_ADDRESS = "tz1TKc3zQBMv7Rez77sX4JNdqMvG33LQrURk";

new App(RPC_URL).getBalance(FAUCET_ADDRESS);
