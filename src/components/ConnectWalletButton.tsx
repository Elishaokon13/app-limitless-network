import { Button } from 'uikit'
import Trans from './Trans'
import { useWeb3Modal } from '@web3modal/react'

const ConnectWalletButton = (props) => {
  const { open, close } = useWeb3Modal()

  return (
    <Button onClick={open} {...props}>
      <Trans>Connect Wallet</Trans>
    </Button>
  )
}

export default ConnectWalletButton
