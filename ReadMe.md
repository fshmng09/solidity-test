## About

これは Ganache と Truffle を用いて ローカルで EVM の SmartContract 実行環境を作成するための参考リポジトリです。

下記のような人を想定しています。

- Remix で SmartContractを動かすことができる
- スマートコントラクト動作確認環境をローカルに作りたい
- Solidityの練習をしたい


## Tools

|Name|Comment|
|-----|-----|
|[Ganache](https://trufflesuite.com/ganache/)|ワンクリックでEtheriumのブロックチェーンを作成可能。Macだとbrewでinstallができる。|
|[Truffle](https://trufflesuite.com/)|EVMフレームワークのデファクトスタンダートだそうです。hardhatを使う人もいますが、Ganacheとの相性を考えてTruffleを利用しています。|
|[mocha](https://mochajs.org/)|Javascriptのテストのためのフレームワークです。web3.jsでGanacheへのデプロイ・コールの動作確認のために使います。web3固有のものではないです。|

## References

|Name|Comment|
|-----|-----|
|[Ganacheの導入](https://qiita.com/toshiok/items/4ed39f84e95b3a434477)|これみればとりあえずブロックチェーン実行環境ができます。|
|[Truffleの使い方](https://qiita.com/toshiok/items/12b47b28e5fb6c5909b1)|Truffleの使い方がわかります。`npm install -g` してますが、`npx`でも使えます。|

## HowToDeploy

1. `npm ci`
2. `npx truffle compile`
3. Ganacheの起動, truffle-config.jsをGanacheにimport
4. `npx truffle migrate --netowork development`
5. `npm run test` //これでdeploy, call, send ができます。


network に rinkebyも選択可能です。

https://media-terminal.net/rinkeby-deploy

## Memo

スマコン実行時に下記のエラーがたまに出ますが、何度か実行すると正常に実行できました。

`assertion failed [block != nullptr]: BasicBlock requested for unrecognized address`