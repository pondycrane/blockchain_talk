var CryptoJS = require("crypto-js");

class Block {
	constructor(index, previousHash, data) {
		this.index = index;
		this.previousHash = previousHash;
		this.timestamp = new Date().getTime()/1000;
		this.data = data;
		this.hash = CryptoJS.SHA256(previousHash + this.timestamp+ this.index).toString();
	}
	
	createNextBlock() {
		return new Block(this.index+1, this.hash, "data for block "+(this.index+1));
	}
	
	printBlock() {
		console.log(this);
	}
}

export default Block;
