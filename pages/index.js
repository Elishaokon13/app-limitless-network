import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Image from "next/image";

export default function Home() {
  const [totalSupply, setTotalSupply] = useState(null);
  const [liquidity, setLiquidity] = useState(null);

  useEffect(() => {
    const fetchTotalSupply = async () => {
      try {
        const response = await fetch('https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0x593649f70f836565e33f0bce9af9503c243359b3&apikey=YOUR_API_KEY');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTotalSupply(data.result);
      } catch (error) {
        console.error('Error fetching total supply:', error);
      }
    };

    // Example data for liquidity
    const liquidityData = "5000";

    setLiquidity(liquidityData);
    fetchTotalSupply();
  }, []);

  return (
   <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <div className='grid lg:grid-cols-2 gap-3 w-full text-white'>
          <div className='rounded-lg bg-[#152a3b] px-6 p-3 border-dashed flex flex-col gap-3 justify-center items-start h-[150px]'>
            <div className=' flex items-center justify-between w-full'>
              <p className='text-xl'>Total supply</p>
              <p className='text-2xl'>{totalSupply !== null ? totalSupply : 'Loading...'}B</p>
            </div>
            <p className='text-sm text-[#14c2a3]'>BSC</p>
          </div>

          <div className='rounded-lg bg-[#152a3b] px-6 p-3 border-dashed flex flex-col gap-3 justify-center items-start h-[150px]'>
            <div className=' flex items-center justify-between w-full'>
              <p className='text-xl'>Bridge liquidity</p>
              {liquidity !== null ? (
                <p className='text-2xl'>${liquidity}</p>
              ) : (
                <p className='text-2xl'>Loading...</p>
              )}
            </div>
            <p className='text-sm text-[#14c2a3]'>Locked supply</p>
          </div>
        </div>

      </div>
    </main>
    </>
  );
}
