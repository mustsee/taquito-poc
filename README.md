# This repository uses the Taquito Typescript library

_Taquito POC : Running the command retrieves the account balance of an address on the Tezos platform_

For the project to run successfully, you need :

- an URL of a test network
- an address (an account) on the network tested.

In the main.ts file, we define the url (`https://hangzhounet.api.tez.ie`) and the address (`tz1TKc3zQBMv7Rez77sX4JNdqMvG33LQrURk`).

You can run the project without creating an account.

If you wish to interact with your own account, please follow below the <strong>Node test and address creation</strong> section to get your own url and address and replace the values in the main.ts file.

## To run the project

```
yarn install
npx ts-node main.ts
```

## To install ts-node

[ts-node on github](https://github.com/TypeStrong/ts-node)

```
npm install -g typescript
npm install -g ts-node
npm install -D tslib @types/node
```

## Node test and address creation

### [Test networks](https://tezos.gitlab.io/introduction/test_networks.html)

> Mainnet is the main Tezos network, but is not appropriate for test. Other networks are available to this end.

- [List of community-run nodes](https://tezostaquito.io/docs/rpc_nodes/)

> Test networks have a list of built-in accounts with some funds. You can obtain the key to these accounts from a faucet to claim the funds.

- [Faucets can be accessed here](https://teztnets.xyz/)

After receiving the activation file, we store it locally in a json file. Then we have to run this command :

`tezos-client activate account <name> with <path-to-activation-file>.json`

First, we have to install the tezos client.

### [Tezos client installation and setup](https://assets.tqtezos.com/docs/setup/1-tezos-client/)

Click on the link above and follow the <strong>install</strong> process related to your OS.

Then <strong>configure</strong> the endpoint to a public test network (the network you created your faucet on).

Example : `tezos-client --endpoint https://hangzhounet.api.tez.ie config update`

Finally, we can run the previous command and activate the account :

`tezos-client activate account <name> with <path-to-file>.json`

Change the url if needed and the address in the main.ts file and you are set up !
