import { atom, useAtomValue } from 'jotai'
import { useRouter } from 'next/router'
import { isChainSupported } from 'utils/wagmi'
import { useNetwork } from 'wagmi'
import { useSessionChainId } from './useSessionChainId'
import { CHAIN_ID } from 'utils/getRpcUrl'

const queryChainIdAtom = atom(-1) // -1 unload, 0 no chainId on query

queryChainIdAtom.onMount = (set) => {
  const params = new URL(window.location.href).searchParams
  const c = params.get('chainId')
  if (isChainSupported(+c)) {
    set(+c)
  } else {
    set(0)
  }
}

export function useLocalNetworkChain() {
  const [sessionChainId] = useSessionChainId()
  // useRouter is kind of slow, we only get this query chainId once
  const queryChainId = useAtomValue(queryChainIdAtom)

  const { query } = useRouter()

  const chainId = +(sessionChainId || query.chainId || queryChainId)
  if (isChainSupported(chainId)) {
    return chainId
  }

  return undefined
}

export const useActiveChainId = () => {
  const localChainId = useLocalNetworkChain()
  const queryChainId = useAtomValue(queryChainIdAtom)

  const { chain } = useNetwork()
  const chainId = localChainId ?? chain?.id ?? (queryChainId >= 0 ? CHAIN_ID : undefined)

  const isNotMatched = chain && localChainId && chain.id !== localChainId

  return {
    chainId,
    isWrongNetwork: (chain?.unsupported ?? false) || isNotMatched,
    isNotMatched,
  }
}
