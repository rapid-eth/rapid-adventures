const ethers = require("ethers");
const fs = require('fs');

const contractJSON = require("../artifacts/Collectibles.json");
const questsList = require("../quest.json")
const provider = ethers.getDefaultProvider('rinkeby');
// 0x342fe81f80ad854a3aa3c1dc2937999a49d9a8bd
let signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
const delegateAddress = "0x81fb5AFdaC43d45b2f8eDB01F6D99972502B37c0"
let contract = new ethers.Contract(contractJSON.networks['4'].address, contractJSON.abi, signer);

const main = async () => {
    //await setup();
    let collectionID = await setup()

    

}

const setup = async () => {
    // create new collection

    let params = ["rapid dummy collection", []]
    //UNCOMMENT TO SEND TX
    //let tx = await contract.createCollection(...params)
    
    let collectionID = await contract.getCollectionID(signer.address, ...params)

    console.log(collectionID)
    
    return collectionID
}

main();