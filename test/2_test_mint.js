const { expect } = require("chai");
const hre = require("hardhat");
const fs = require('fs');

describe("ERC20MyTest", () => {

  beforeEach(async () =>{
    [deployer, addr1, addr2] = await hre.ethers.getSigners();
  });

  describe("Minting test", () => {
    it("should check minted tokens", async () => {
      //console.log(deployer.address);

      const dir = "./networks/";
      const fileName = "ERC20My_" + `${network}.json`;
      const data = JSON.parse(await fs.readFileSync(dir + fileName, { encoding: "utf8" }));

      const ERC20MyInstance = await hre.ethers.getContractFactory("ERC20My");
      //console.log(ERC20MyInstance);
      const ERC20My = await ERC20MyInstance.attach(data.ERC20My);
        
      const balanceOwner = await ERC20My.balanceOf(deployer).toString();
       
    
      console.log(balanceOwner);



    });
  });
  
});

