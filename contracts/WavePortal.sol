// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address[] wavers;
    mapping(address => uint256) public waversMap;

    constructor() {
        console.log("Arigato Smart Contract!");
    }

    // wave function
    function wave() public {
        totalWaves++;
        if (waversMap[msg.sender] < 1) {
            wavers.push(msg.sender);
        }
        waversMap[msg.sender]++;
        console.log("%s has waved!", msg.sender);
    }

    // function to get total waves
    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    // function to get all wavers
    function getAllWavers() public view returns (address[] memory) {
        return wavers;
    }

    // function to get wavers map
    function getWaversMap() public view {
        for (uint256 i = 0; i < wavers.length; i++) {
            console.log(
                "Waver %s waved %d times!",
                wavers[i],
                waversMap[wavers[i]]
            );
        }
    }
}
