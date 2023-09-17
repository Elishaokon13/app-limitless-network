import { Dispatch } from '@reduxjs/toolkit'
import { resetUserState } from 'state/global/actions'

const connectorLocalStorageKey = 'connectorIdv2'

export const clearUserStates = (
  dispatch: Dispatch<any>,
  {
    chainId,
    newChainId,
    isDeactive = false,
  }: {
    chainId?: number
    newChainId?: number
    isDeactive?: boolean
  },
) => {

  dispatch(resetUserState({ chainId, newChainId }))
  // Only clear localStorage when user disconnect,switch address no need clear it.
  if (isDeactive) {
    window?.localStorage?.removeItem(connectorLocalStorageKey)
  }
}
