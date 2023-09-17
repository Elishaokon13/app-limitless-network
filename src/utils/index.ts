import { getAddress } from '@ethersproject/address'
import { CHAIN_ID } from 'config/constants/networks'

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

export function getBscScanLink(
  data: string | number,
  type: 'transaction' | 'token' | 'address' | 'block' | 'countdown' = 'token',
  chainIdOverride?: number,
): string {
  const chainId = chainIdOverride || CHAIN_ID
  switch (type) {
    case 'transaction': {
      return `https://bscscan.com/tx/${data}`
    }
    case 'token': {
      return `https://bscscan.com/token/${data}`
    }
    case 'block': {
      return `https://bscscan.com/block/${data}`
    }
    case 'countdown': {
      return `https://bscscan.com/block/countdown/${data}`
    }
    default: {
      return `https://bscscan.com/address/${data}`
    }
  }
}

