import { configureChains, createConfig } from 'wagmi'
import memoize from 'lodash/memoize'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { bsc } from 'wagmi/chains'
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum'

export const w3mProjectId = '52e491afe8eff72f1ffb2ba1b810613e'

const { chains, publicClient } = configureChains(
  [bsc],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: process.env.NEXT_PUBLIC_NODE_PRODUCTION,
      }),
    }),
  ],
)
export const wagmiConfig = createConfig({
  autoConnect: false,
  publicClient,
  connectors: w3mConnectors({ chains, projectId: '52e491afe8eff72f1ffb2ba1b810613e' }),
})

export const ethereumClient = new EthereumClient(wagmiConfig, chains)

export const CHAIN_IDS = chains.map((c) => c.id)
export const isChainSupported = memoize((chainId: number) => CHAIN_IDS.includes(56))