// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IAEC is ERC20 {
    constructor() ERC20("Infinity Air Energy Coin", "IAEC") {
        _mint(msg.sender, 5000000000 * 10 ** decimals());
    }
}