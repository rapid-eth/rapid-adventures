const ethers = require("ethers");
const fs = require('fs');

const contractJSON = require("../artifacts/MeshDevCoin.json");
const questsList = require("../quest.json")
const provider = ethers.getDefaultProvider('rinkeby');
// 0x342fe81f80ad854a3aa3c1dc2937999a49d9a8bd
let signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
const delegateAddress = "0x81fb5AFdaC43d45b2f8eDB01F6D99972502B37c0"
const main = async () => {

    //create ethers contract
    let contract = new ethers.Contract(contractJSON.networks['4'].address, contractJSON.abi, signer);

    //for each quest with a config
    for (let i = 0; i < questsList.data.length; i++) {
        const quest = questsList.data[i];
        const {id, config} = quest
        if (!config) {
           continue;
        }
        let reward = quest.metadata.reward
        reward += id
        let metaString = "Dummy"+ id
        let certParams = [reward, [delegateAddress], metaString]
        //let tx = await contract.createCertificateType(...certParams)
        let cid = await contract.getCertificateID(...certParams)
        console.log(cid)
        let certificate = {
            networkId: 4,
            type: "erc20",
            address: contract.address,
            id: cid
        }
        questsList.data[i].certificate = certificate

    }
    console.log(questsList)

    fs.writeFileSync("questCertificates.json", JSON.stringify(questsList))
    // createCertificateType(uint256 _amount, address[] calldata _delegates, string calldata _metadata) external onlyOwner {

    // getCertificateID



}

main();