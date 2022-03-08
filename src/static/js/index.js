localhost = "http://localhost:8545"
const Web3 = new Web3(Web3.givenProvider || localhost);
const erc20Contract = require("../../../artifacts/contracts/ERC20My.json");


async function init() {
    const web3 = new Web3(localhost);
    
    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );

    
};












let htmlRenderer = () => {
    return (
        `<div>
            <h1> Deploy ERC20 Token </h1>
            <button> Launch ERC20 </button>
        </div>
        <div>
            <h1> Useful information 2 </h1>
            <button id="ElemID"> Launch ERC721 </button>
        </div>
        `


    );
}

document.querySelector("#app").innerHTML = htmlRenderer();


let button = document.querySelector('button').onclick = function() {
  console.log("Launching script for ERC20");
}

let myElem = document.getElementById('ElemID').onclick = function() {
	console.log("Launching script for ERC721");


}