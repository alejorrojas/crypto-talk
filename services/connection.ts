declare global {
    interface Window {
        ethereum: any
    }
}

const { ethereum } = window

const connectWallet = async () => {
    try {
        
        const account = await ethereum.request({method: "eth_requestAccounts"})
        const isMetamask = await ethereum.isMetamask()
        return {
            account,
            isMetamask
        }

    } catch (e) {
        console.error(e)
        return {
            isMetamask: false
        }
    }

   
}

export default connectWallet