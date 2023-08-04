import { Web3Button } from "@thirdweb-dev/react";

export default function Claim() {
  return (
    <Web3Button
      contractAddress="0xC13CbF50370E5EaE6f5Dd9D8a1015007f34C4eaD"
      action={(contract) => {
        contract.call("claim")
      }}
    >
      Claim
    </Web3Button>
  )
}