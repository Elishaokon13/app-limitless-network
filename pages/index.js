import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Image from "next/image";
import BalanceOf from './components/Withdrawable';
import Claim from './components/Claim';

// Placeholder components, you should replace these with actual implementations
// const Claim = () => <p>Claim component</p>;
// const BalanceOf = () => <p>BalanceOf component</p>;
// const DividendHolders = () => <p>DividendHolders component</p>;
// const WithdrawableDividend = () => <p>WithdrawableDividend component</p>;

export default function Home() {
  const [totalSupply, setTotalSupply] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xC13CbF50370E5EaE6f5Dd9D8a1015007f34C4eaD&apikey=RK9BKPUGPM4MIXZBXK4QWTYCW3YRN3WGKF');
        const data = await response.json();
        const totalSupplyValue = data.result && !isNaN(data.result) ? Number(data.result) : 0;
        setTotalSupply(formatNumber(totalSupplyValue));
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };
    fetchData();
  }, []);

  // Format time to display in the format "HH:mm:ss"
   const formatNumber = (num) => {
    const tier = Math.log10(num) / 3 | 0;
    if (tier === 0) return num.toFixed(0);
    const scale = Math.pow(10, tier * 3);
    const scaled = num / scale;
    return scaled.toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className='bg-black lg:w-3/4 xl:w-2/3 mx-auto px-4 py-8 flex flex-col gap-8'>
        {/* our supply */}
        <div className='flex flex-col gap-3 items-start  w-full '>
          <p className='text-xl'>Token Details</p>
          <div className='grid lg:grid-cols-2 gap-3 w-full text-white'>
            <div className='rounded-lg bg-[#152a3b] px-6 p-3 border-dashed flex flex-col gap-3 justify-center items-start h-[150px]'>
              <div className=' flex items-center justify-between w-full'>
                <p className='text-xl'>Total supply</p>
                <p className='text-2xl'>{totalSupply}B</p>
              </div>
              <p className='text-sm text-[#14c2a3]'>BSC</p>
            </div>
            {/* <div className='rounded-lg bg-[#152a3b] px-6 p-3 border-dashed flex flex-col gap-3 justify-center items-start h-[150px]'>
              <div className=' flex items-center justify-between w-full'>
                <p className='text-xl'>Bridge liquidity</p>
                {liquidity !== null ? (
                  <p className='text-2xl'>${liquidity}</p>
                ) : (
                  <p className='text-2xl'>Loading...</p>
                )}
              </div>
              <p className='text-sm text-[#14c2a3]'>Locked supply</p>
            </div> */}
          </div>
        </div>
        {/* our token */}
        <div className='flex flex-col gap-2 items-start  w-full '>
          <p className='text-xl'>Your Claim Details</p>
          <div className='grid lg:grid-cols-3 gap-3 w-full text-white'>
            <div className='rounded-lg bg-[#152a3b]  border-dashed flex flex-col gap-3 items-center justify-center h-[200px]'>
              <p className='text-xl'>Claim Rewards</p>
              <Claim />
            </div>
            {/* <div className='rounded-lg bg-[#152a3b]  border-dashed flex flex-col gap-3 items-center justify-center h-[200px]'>
              <p className='text-xl'>Your Dividend holdings </p>
              <BalanceOf />
            </div> */}
            <div className='rounded-lg bg-[#152a3b]  border-dashed flex flex-col gap-3 items-center justify-center h-[200px]'>
              <p className='text-xl'>Balance</p>
              <div>{BalanceOf}</div>
            </div>
            {/* <div className='rounded-lg bg-[#152a3b]  border-dashed flex flex-col gap-3 items-center justify-center h-[200px]'>
              <p className='text-xl'>Dividend holders</p>
              <DividendHolders />
            </div>
            <div className='rounded-lg bg-[#152a3b]  border-dashed flex flex-col gap-3 items-center justify-center h-[200px]'>
              <p className='text-xl'>Total Rewards</p>
              <WithdrawableDividend />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
