const { expect } = require("chai");
const hre = require("hardhat");
const fs = require('fs');

describe("ERC20MyTest", () => {

  beforeEach(async () =>{
    [deployer, addr1, addr2] = await hre.ethers.getSigners();
  });

  describe("Deployment test", () => {
    it("should set construcotr parameters", async () => {

      namesAndAddresses = {};
      //console.log(deployer.address);
      const ERC20MyInstance = await hre.ethers.getContractFactory("ERC20My");
      //console.log(ERC20MyInstance);
      const ERC20My = await ERC20MyInstance.deploy(
        process.env.TOKEN_NAME, 
        process.env.TOKEN_SYMBOL,
      );

      const [name, symbol, address] = await Promise.all([
        ERC20My.name(),
        ERC20My.symbol(),
        ERC20My.address,
      ]);



      let adr_template = new RegExp("0x.*");
      //console.log(adr_template);
      //console.log("LOGS: ", name, symbol, address);
      //console.log("LOGS2: ", process.env.TOKEN_NAME, process.env.TOKEN_SYMBOL);

      expect(name).to.be.equal(process.env.TOKEN_NAME);
      expect(symbol).to.be.equal(process.env.TOKEN_SYMBOL);
      expect(adr_template.test(address) == true);
      //console.log(address.match(/0x.*/));

      namesAndAddresses.ERC20My = ERC20My.address;


      const data = await JSON.stringify(namesAndAddresses, null, 2);
      const dir = './networks/';
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const fileName = 'ERC20My_' + `${network}.json`;

      await fs.writeFileSync(dir + fileName, data, { encoding: 'utf8' });
    });
  });
  
});

