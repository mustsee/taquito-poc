import { TezosToolkit } from "@taquito/taquito";

export class App {
  private tezos: TezosToolkit;

  constructor(rcpUrl: string) {
    // We first need to configure Taquito with
    // an RPC URL (to communicate with a Tezos node).
    this.tezos = new TezosToolkit(rcpUrl);
  }

  // Retrieves the balance of an account, with the getBalance method
  public getBalance(address: string): void {
    this.tezos.rpc
      .getBalance(address)
      .then((balance) => console.log(balance))
      .catch((e) => console.log("Adress not found", e));
  }
}
