// ライブラリのインポート
const assert = require('assert');  // テスト assert をするためのライブラリ
const Web3 = require('web3');      // ローカル環境(Ganache)と接続するためのライブラリ

// ローカル環境(Ganache)と接続するためのオブジェクトを生成
const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
const web3 = new Web3(provider);

// コンパイルスクリプトからBytecodeとABIを取得する
const contractFile = require('../scripts/compile');
const abi = contractFile.abi
const bytecode = contractFile.evm.bytecode.object

// 変数定義
let accounts;        // Ganacheで提供される10アカウントを保持する
let usersContract;  // デプロイしたSmartContractを保持する
// console.log(abi, bytecode)

// 各テストを実行する前に実行する
beforeEach(async() => {
    // アカウントを取得する
    accounts = await web3.eth.getAccounts();
    // ABIとBytecodeを一番最初のアカウントを使ってデプロイ
    usersContract = await new web3.eth.Contract(abi)  // ABI
        .deploy({data: bytecode})                                 // Bytecode
        .send({from: accounts[0], gas: '1000000'});               // 一番最初のアカウント、GAS=1000000
});

// テスト 'The UsersContract' 開始
describe('The UsersContract', async() => {
    // １つ目のテスト: callできたか？
    it('should deploy', () => {
        console.log(usersContract.options.address);
        assert.ok(usersContract.options.address);
    });
});