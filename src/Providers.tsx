import React from 'react'
import { ModalProvider, light, dark } from 'uikit'
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'
import { ThemeProvider } from 'styled-components'
import { LanguageProvider } from 'contexts/Localization'
import { ToastsProvider } from 'contexts/ToastsContext'
import { Store } from '@reduxjs/toolkit'
import { MatchBreakpointsProvider } from 'uikit/contexts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { wagmiConfig, w3mProjectId, ethereumClient } from 'utils/wagmi'
import { WagmiConfig } from 'wagmi'
import { Web3Modal } from '@web3modal/react'
import { bsc } from '@wagmi/core/chains'
import { limitlessMainColor, limitlessSecondaryColor, limitlessTertiaryColor } from 'uikit/theme/colors'

const ThemeProviderWrapper = (props) => {
  return <ThemeProvider theme={dark} {...props} />
}

const queryClient = new QueryClient()

const Providers: React.FC<{ store: Store }> = ({ children, store }) => {
  return (
    <>
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MatchBreakpointsProvider>
            <ToastsProvider>
              <ThemeProviderWrapper>
                <LanguageProvider>
                  <ModalProvider>{children}</ModalProvider>
                </LanguageProvider>
              </ThemeProviderWrapper>
            </ToastsProvider>
          </MatchBreakpointsProvider>
        </Provider>
      </QueryClientProvider>
    </WagmiConfig>
    <Web3Modal 
      projectId={w3mProjectId} 
      ethereumClient={ethereumClient}
      defaultChain= {bsc}
      themeVariables={{
        '--w3m-font-family': 'Roboto, sans-serif',
        '--w3m-accent-color': limitlessMainColor,
        '--w3m-button-border-radius': '5px',
        '--w3m-text-medium-regular-size': '1rem',
        '--w3m-logo-image-url': ''
      }}
    />
    </>
)}

export default Providers
