import * as crypto from 'crypto';

type transaction = {
    sender: string;
    recipient: string;
    amount: number;
}

type  block = {
    index: number;
    timestamp: number;
    transactions: transaction[];
    proof: number;
    previous_hash: string;
}

interface BlockchainInterface {
    chain: block[];
    current_transactions: transaction[];
    new_block(proof: number, previous_hash?: string): block;
    new_transaction(sender: string, recipient: string, amount: number): number;
    hash(block: block): string;
    last_block(): block;
    proof_of_work(last_proof: number): number;
}

class Blockchain implements BlockchainInterface {
    chain: block[];
    current_transactions: transaction[];

    constructor() {
        this.chain = [];
        this.current_transactions = [];

        // Create the genesis block
        this.new_block(100, '1');
    }

    new_block(proof: number, previous_hash?: string): block {
        const block: block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.current_transactions,
            proof: proof,
            previous_hash: previous_hash || this.hash(this.last_block()),
        };

        // Reset the current list of transactions
        this.current_transactions = [];
        this.chain.push(block);
        return block;
    }

    new_transaction(sender: string, recipient: string, amount: number): number {
        this.current_transactions.push({
            sender,
            recipient,
            amount,
        });

        return this.last_block().index + 1;
    }

    hash(block: block): string {
        const blockString = JSON.stringify(block);
        const hash = crypto.createHash('sha256').update(blockString).digest('hex');
        return hash;
    }



    last_block(): block {
        return this.chain[this.chain.length - 1];
    }

    proof_of_work(last_proof: number): number {
        let proof = 0;
        while (!this.valid_proof(last_proof, proof)) {
            proof += 1;
        }
        return proof;
    }

    valid_proof(last_proof: number, proof: number): boolean {
        const guess = `${last_proof}${proof}`;
        const guess_hash = crypto.createHash('sha256').update(guess).digest('hex');
        return guess_hash.startsWith('0000');
    }
}

// 先声明对象
let blockchainObjc = new Blockchain();

const nodeId = require('uuid').v4().replace(/-/g, '');

function mine(){
    const last_block = blockchainObjc.last_block();
    const last_proof = last_block.proof;
    const proof = blockchainObjc.proof_of_work(last_proof);
    // 给工作量证明的节点提供奖励.
    // 发送者为 "0" 表明是新挖出的币    
    blockchainObjc.new_transaction('0', nodeId, 1);

    const previous_hash = blockchainObjc.hash(last_block);
    const block = blockchainObjc.new_block(proof, previous_hash);

    console.log('New Block Forged:', block);
}

function chain(){

    console.log('Full Blockchain:', JSON.stringify(blockchainObjc.chain, null, 2));
    console.log('length :', blockchainObjc.chain.length);
}

// 先创建对象再调用
mine();

// // 添加新交易
blockchainObjc.new_transaction('d4ee26eee15148ee92c6cd394edd974e', 'someone-other-address', 50);
//
mine();
chain();
