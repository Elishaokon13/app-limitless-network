import { usePollBNBBusdPrice, usePollLimitlessBusdPrice } from 'hooks/useBUSDPrice'
import useIsMainChain from 'hooks/useIsMainChain'
import React from 'react'

const MainChainUpdater = () => {
  usePollLimitlessBusdPrice()
  usePollBNBBusdPrice()
  return null
}

const TokenUsdPriceUpdater = () => {
  return <>{<MainChainUpdater />}</>
}

export default React.memo(TokenUsdPriceUpdater)
