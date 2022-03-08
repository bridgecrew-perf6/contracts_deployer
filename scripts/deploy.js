const { ethers } = require("hardhat");
const hre = require("hardhat");


async function main() {

  const namesAndAdresses = {}
  const [deployer] = await hre.ethers.getSigners();
  
  
  const ERC20MyInstance = await ethers.getContractFactory("ERC20My");
  const ERC20My = await ERC20MyInstance.deploy(process.env.TOKEN_NAME, process.env.TOKEN_SYMBOL);
  
  console.log(`Contract is deployed by ${deployer.address}`);
  console.log(`Network is ${hre.network.name}`);
  console.log(`Contract address is ${ERC20My.address}`);

};


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
