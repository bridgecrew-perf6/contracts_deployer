//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract ERC20My is ERC20, Ownable{

    mapping (address => bool) whitelist;

    constructor(string memory _name, string memory _symbol) ERC20 (_name, _symbol) {
        _transferOwnership(_msgSender());
        _mint(owner(), 1000000);
        addWhitelist(owner());
    }

    function addWhitelist(address _allowed) onlyOwner public{
        whitelist[_allowed] = true;
    }

    modifier onlyMinter() {
        require(whitelist[_msgSender()] == true, "Caller is not in whitelist");
        _;
    }

    function mintSelf(uint256 amount) onlyMinter() public {
        _mint(_msgSender(), amount);
    }
}

