import connectWallet from "../../../services/connection"


const Navbar = () => {
  const handleSubmit = async()=>{
    const { account, isMetamask} = await connectWallet()
    console.log({account})
    console.log({isMetamask})
  }

  return (
    <nav>
        <img src='/DH_Logo.png' style={{"width": "5rem"}}/> 
        <button onClick={handleSubmit}> HOVER ME</button>
    </nav>
  )
}

export default Navbar