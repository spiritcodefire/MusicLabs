import { useStoreApi } from "./StoreApi";

import { UseWeb3 } from './GetWeb3'
import { Button, TextField } from "@material-ui/core";

import "./ConnectionMetamask.css";
import EthLogo from "../../../assets/png/ethereum.png";

function App() {
  const { balance, address, message, setAddress, setBalance } = useStoreApi();
  const web3 = UseWeb3();

  // get user account on button click
  const getUserAccount = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        web3.eth.getAccounts().then(accounts => {
          setAddress(accounts[0]);
          updateBalance(accounts[0]);
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Metamask extensions not detected!");
    }
  };

  const updateBalance = async fromAddress => {
    await web3.eth.getBalance(fromAddress).then(value => {
      setBalance(web3.utils.fromWei(value, "ether"));
    });
  };

  const sendTransaction = async e => {
    e.preventDefault();
    const amount = e.target[0].value;
    const recipient = e.target[1].value;
    await web3.eth.sendTransaction({
      from: address,
      to: recipient,
      value: web3.utils.toWei(amount, "ether")
    });
    updateBalance(address);
  };

  return (
    <div className="">
      <header className="App-header">
        <img src={EthLogo} className="App-logo" alt="logo" />
        <p>
          <code>Welcome in an decentralized application</code>
        </p>
        {address && (
          <>
            <p className="text-dark"> Your account: {address}</p>
            <p className="text-dark"> Balance: {balance} </p>
          </>
            ) 
        }
        <Button
          onClick={() => getUserAccount()}
          variant="outlined"
          color="primary"
        >
          Connect your wallet
        </Button>
        {message && (
          <p>
            <code>{message}</code>
          </p>
            ) 
        }
        <form onSubmit={e => sendTransaction(e)}>
          <TextField
            required
            label="Amount"
            inputProps={{ step: "any" }}
            type="number"
            variant="filled"
          />
          <TextField required label="Recipient Address" variant="filled" />
          <Button
            style={{ margin: "10px" }}
            type="submit"
            variant="outlined"
            color="default"
          >

            Send Crypto
          </Button>
        </form>
      </header>
    </div>
  );
}

export default App;



























// import React from 'react'
// import { useStoreApi } from './StoreApi';
// import { UseWeb3 } from './GetWeb3'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// const Index = () => {

//     const {address, balance, message, setBalance, setAddress} = useStoreApi();
//     const web3 = UseWeb3();

//     const setUserAccount = async () => {
//         if(window.ethereum){
//             await window.ethereum.enable();  
//             web3.eth.getAccounts()
//                 .then(accounts => {
//                     setAddress(accounts[0]);
//                     setUserBalance(accounts[0]);
//                 });
//         }
//     };

//     const setUserBalance = async (fromAddress) => {
//         await web3.eth.getBalance(fromAddress).then(value=>{
//                const credit =  web3.utils.fromWei(value, 'ether')
//                setBalance(credit)
//             });
//     };

//     const sendTransaction = async (e) => {
//         e.preventDefault();
//         const amount = e.target[0].value;
//         const recipient = e.target[1].value;
//         await web3.eth.sendTransaction({
//             from: address,
//             to: recipient,
//             value: web3.utils.toWei(amount, 'ether')

//         })
//         setUserBalance(address)
//     }


//     return (
//         <div className="container text-center" style={{height: "80vh"}}>
//             Hello MetaMask
//             <p>Welcome in an decentralized application</p>
//             <button className="btn btn-outline-primary" onClick={() => setUserAccount() }>Connect to MetaMask</button>
//             { address && 
//                 <>
//                 <p className="h3 m-5">Your Adress : {address}</p>
//                 <p>Balance: {balance}</p>
               
                
//                 </>
//             } 
//             <Form onSubmit={(e)=>{sendTransaction(e)}}>
//                     <Form.Group controlId="exampleForm.ControlTextarea1">
//                         <Form.Label>Example textarea</Form.Label>
//                         <Form.Control type="number" as="textarea" rows={3} />
//                     </Form.Group>
//                     <Button type="submit" variant="danger" >Send Transaction</Button>
//                 </Form>
//         </div>
//     )
// }

// export default Index
