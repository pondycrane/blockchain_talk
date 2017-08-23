import Block from './Block';
import Blockchain from './Blockchain';

let blockchain = new Blockchain();
blockchain.createNextBlock("new Data");

blockchain.printBlockchain();

