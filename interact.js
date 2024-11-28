require('dotenv').config()
const ethers = require('ethers')

const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS='0x8F63d939Df7201324C89b52D1E3FFaC8Ab2be39E'

const abi = require('./abi.json')

//
//Address
//ABI

provider = new ethers.JsonRpcProvider(RPC_URL);
signer = new ethers.Wallet(PRIVATE_KEY, provider)

const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer)

//console.log(contract)
async function getNum() {
    const num = await contract.retrieve()
    console.log(num)
}

async function setNum() {
    const tx = await contract.save(78);
    await tx.wait()
    console.log(tx.hash)
}

;(async () => {
    await getNum();
    // await setNum();
    // await getNum();
})().catch(console.error)