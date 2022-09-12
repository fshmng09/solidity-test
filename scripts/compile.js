// ライブラリのインポート
const path = require('path');   // ファイルパスを操作するためのライブラリ
const fs = require('fs');       // ファイルを読み書きするためのライブラリ
const solc = require('solc');   // Solidity言語のプログラムをコンパイルするためのライブラリ

// プログラムファイルのパスを設定
const contractPath = path.resolve(__dirname, "../contracts", "Hello.sol");
// プログラムファイルを読み込む
const source = fs.readFileSync(contractPath, 'utf8');


var input = {
    language: 'Solidity',
    sources: {
      'Hello.sol': {
        content: source
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

  
// プログラムをコンパイルし、外部へ export する
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Hello.sol'
]["Hello"];
