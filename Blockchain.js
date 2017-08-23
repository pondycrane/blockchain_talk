import Block from './Block';
var CryptoJS = require("crypto-js");

class Blockchain {
  constructor() {
    this.chain = [];

    let genesisHash = CryptoJS.SHA256("genesisHash").toString();
    this.chain.push(new Block(0, genesisHash, "First block"));
  }

  createNextBlock(data) {
    let latestBlock = this.chain[this.chain.length - 1];
    let newBlock = new Block(latestBlock.index + 1, latestBlock.hash, data);
    this.chain.push(newBlock);
  }

  printBlockchain() {
    console.log(this.chain);
  }
}

export default Blockchain;
