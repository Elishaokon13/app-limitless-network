import { Web3Button } from "@thirdweb-dev/react";

export default function Claim() {
  return (
    <Web3Button
      contractAddress="0xb413df01580659F671471956e9D2fAe989d1dcd3"
      action={(contract) => contract.claim()}
      theme="dark"
    >
      Claim
    </Web3Button>
  )
}