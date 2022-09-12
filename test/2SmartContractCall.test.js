// ライブラリのインポート
const assert = require('assert');  // テスト assert をするためのライブラリ
const Web3 = require('web3');      // ローカル環境(Ganache)と接続するためのライブラリ


// ローカル環境(Ganache)と接続するためのオブジェクトを生成
const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
const web3 = new Web3(provider);


// 1. Import the contract abi
const contractFile = require('../scripts/compile');
const abi = contractFile.abi

// 2. Add the Web3 provider logic here:
// {...}

// 3. Create address variables
const contractAddress = '0xeB214AD8a208A5afbc3FdB68c369230454b58702'; // TODO edit


// 変数定義
let accounts;        // Ganacheで提供される10アカウントを保持する
let data2; // Fizz

beforeEach(async() => {
    // アカウントを取得する
    accounts = await web3.eth.getAccounts();

    // contract を取得して call 現在のproductnameを確認する
    console.log(`Making a call to contract at address: ${contractAddress}`);    
    const incrementer = new web3.eth.Contract(abi, contractAddress);
    const data = await incrementer.methods.getname().call();
  
    console.log(`The current number stored is: ${data}`);
    await incrementer.methods.setname(data + "a").send({from: accounts[0], gas: '1000000'});
    data2 = await incrementer.methods.getname().call();
  
    console.log(`The current number stored is: ${data2}`);

})

// テスト 'The ContractCall' 開始
describe('The UsersContract', async() => {
    // １つ目のテスト: デプロイできたか？
    it('should call', () => {
        // console.log(usersContract.options.address);
        assert.ok(data2);
    });
});