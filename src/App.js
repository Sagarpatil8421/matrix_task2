import Box from "./components/Box";

import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {mainnet, polygon, optimism, arbitrum  } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
// import { YourComponent } from "./YourComponent";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
     publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

var count= 0;
function show(){
  if(count== 0){
    count = 1;
    console.log(count);
  }else{
    console.log(count);

    count = 0;
  }
}
function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="App">
          {/* navbar  */}
          <div className="navbar">
            <div className="menu-container">
              <img src="./assets/menu.png" alt="menu" className="menu" onClick={show()} />
            </div>
            <div className="btn">
              <button className="swap">SWAP <img src="./assets/arrow-logo.png" alt="" width='30px' height='25px' /></button>
              {/* <button className="connect">CONNECT</button> */}
              <ConnectButton className="connect" label="CONNECT" />
            </div>
          </div>

          {/* main container  */}
          <div className="main">
            {/* side bar starts */}
            <div className="side-bar" >
              <div className="core">
                <h3>CORE</h3>
                <a href="#"><img src="./assets/dashboard.png" alt="" height='35px' /> Dashboard</a>
                <a href="#"><img src="./assets/calculator.png" alt="" /> Calculator</a>
                <a href="#"><img src="./assets/swap2.png" alt="" /> Swap</a>
                <a href="#"><img src="./assets/todo_list.png" alt="" /> To Do List</a>
                <a href="#"><img src="./assets/faq.png" alt="" /> FAQ</a>
              </div>
              <div className="links">
                <h3>LINKS</h3>
                <a href="#"><img src="./assets/social-logo.png" alt="" /> Socials</a>
                <a href="#"><img src="./assets/website.png" alt="" /> Website</a>
                <a href="#"><img src="./assets/buy_now.png" alt="" /> Buy Now</a>
              </div>
            </div>
            {/* side bar ends  */}

            <div className="container">
              <div className="Waddress">
                <img src="./assets/buy_now.png" alt="buy now" />
                <p> Wallet Address - 0x833aBBF9904E9 A3Fe194f7c433F633b1606D159A</p>
              </div>
              <div className="box-container">
                <div className="row">
                  <Box title="My Total Token" value="34234 TKN" />
                  <Box title="Total Token Value" value="354343$" />
                  <Box title="Token Burned" value="3234 TKN" />
                </div>
                <div className="row">
                  <Box title="Total Supply" value="10000000" />
                  <Box title="Market Volume (USD)" value="54658" />
                  <Box title="Current Price" value="$0.005454" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>

  );
}

export default App;
