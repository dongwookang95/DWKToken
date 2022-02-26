const MyFirstSmartContract = artifacts.require("DWKToken")
const accounts = [process.env.W_ADDRESS1, process.env.W_ADDRESS2]


contract("DWKToken", (accounts) => {

    before(async() => {
        myFirstSmartContract = await MyFirstSmartContract.deployed()
    })

    it("Gives the owner of the token 1M tokens", async() => {
        let balance = await myFirstSmartContract.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '100000', "Balance shd be 0.1m tokens for contract creator")
    })

    it("can transfer tokens between accounts", async() => {
        let amount = web3.utils.toWei('1000', 'ether')
        await myFirstSmartContract.transfer(accounts[1], amount, { from: accounts[0] })

        let balance = await myFirstSmartContract.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000', "Balance shd be 1000 tokens for contract creator")
    })
})