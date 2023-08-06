import { useEffect } from 'react';
import Web3 from 'web3';
import contractABI from '../contractABI.json'; // Replace with the path to your contract ABI JSON file

const Claim = () => {
  useEffect(() => {
    // Load Web3 using the injected provider from the user's wallet (e.g., Metamask)
    if (typeof window !== 'undefined' && window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    }
  }, []);

  const executeClaimFunction = async () => {
    if (!window.web3) {
      alert('Please connect your wallet (e.g., Metamask) to use this feature.');
      return;
    }

    const contractAddress = process.env.CONTRACT_ADDRESS;
    const contractABI = JSON.parse(process.env.CONTRACT_ABI);
    const contract = new window.web3.eth.Contract(contractABI, contractAddress);

    try {
      const accounts = await window.web3.eth.getAccounts();
      const account = accounts[0];

      // Call the claim function of the contract
      const result = await contract.methods.claim().send({ from: account });

      // Handle the result as needed
      console.log('Transaction successful:', result);
    } catch (error) {
      console.error('Error executing claim function:', error);
    }
  };

  return (
    <div>
      <button onClick={executeClaimFunction}>Claim Tokens</button>
    </div>
  );
};

export default Claim;
