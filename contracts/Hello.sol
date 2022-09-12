// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

// contractという大きな入れ物を定義。ここに関数や変数を指定する。
contract Hello {

    string public productname='Hello World';

    // 関数定義
    function setname (string memory name1) public {
        productname = name1;
    }

    // 関数定義
    function getname () public view returns (string memory) {
        return productname;
    }
}