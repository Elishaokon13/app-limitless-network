import React from 'react'
import { Currency, Pair } from 'sdk'
import {
  Button,
  ChevronDownIcon,
  Text,
  useModal,
  Flex,
  Box,
  NumberInput,
  Skeleton,
  IconButton,
  PinFillIcon,
  PinLineIcon,
} from 'uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import { CurrencyLogo, DoubleCurrencyLogo } from '../Logo'
import USDPriceTag from './USDPriceTag'
import { useIsListFetched } from 'state/lists/hooks'
import { useIsPinned } from 'state/user/hooks'

const CurrencySelectButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })<{ pointerEvent: boolean }>`
  padding: 0 0.5rem;
  pointer-events: ${(p) => (p.pointerEvent ? 'none' : '')};
`

const StyledNumberInput = styled(({ loading, ...props }) => <NumberInput {...props} />)<{ loading?: boolean }>`
  padding-left: 100px;
  text-align: right;
  font-size: ${({ loading }) => (loading ? '0px' : '1.5rem')};
  font-weight: 500;
  padding-right: 5px;
  height: 60px;
`

interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
  disablePointerEvent?: boolean
  disableAmountInput?: boolean
  loading?: boolean
}
const CurrencyInputPanel = ({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  disableAmountInput = false,
  hideBalance = false,
  pair = null, // used for double token logo
  otherCurrency,
  id,
  showCommonBases,
  disablePointerEvent,
  loading,
}: CurrencyInputPanelProps) => {
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()
  const isListFetched = useIsListFetched()
  const [isPinned, togglePin] = useIsPinned(currency?.chainId, currency?.address)
  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />,
  )
  if (!isListFetched) {
    return (
      <Box width="100%">
        <Skeleton width="100px" height="24px" />
        <Skeleton width="100%" height="40px" mt="4px" mb="16px" />
      </Box>
    )
  }

  return (
    <Box id={id}>
      <Flex mb="6px" alignItems="center" justifyContent="space-between">
        <CurrencySelectButton
          pointerEvent={disablePointerEvent}
          className="open-currency-select-button"
          selected={!!currency}
          onClick={() => {
            if (!disableCurrencySelect) {
              onPresentCurrencyModal()
            }
          }}
        >
          <Flex alignItems="center" justifyContent="space-between">
            {pair ? (
              <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} margin />
            ) : currency ? (
              <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
            ) : null}
            {pair ? (
              <Text id="pair" bold color="text">
                {pair?.token0.symbol}:{pair?.token1.symbol}
              </Text>
            ) : (
              <Text id="pair" bold color="text">
                {(currency && currency.symbol && currency.symbol.length > 20
                  ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                      currency.symbol.length - 5,
                      currency.symbol.length,
                    )}`
                  : currency?.symbol) || t('Select a currency')}
              </Text>
            )}
            {!disableCurrencySelect && <ChevronDownIcon />}
          </Flex>
          {togglePin && (
            <IconButton
              variant="text"
              scale="sm"
              onClick={(e) => {
                e.stopPropagation()
                togglePin(currency?.chainId, currency?.address)
              }}
            >
              {isPinned ? <PinFillIcon width="18px" /> : <PinLineIcon width="18px" />}
            </IconButton>
          )}
        </CurrencySelectButton>

        {account && (
          <Text onClick={onMax} color="textSubtle" fontSize="14px" style={{ display: 'inline', cursor: 'pointer' }}>
            {!hideBalance && !!currency
              ? t('Balance: %balance%', { balance: selectedCurrencyBalance?.toSignificant(6) ?? t('Loading') })
              : ' -'}
          </Text>
        )}
      </Flex>
      <Flex alignItems="flex-end" flexDirection="column" position="relative">
        {currency && !pair && <USDPriceTag currency={currency} />}
        {loading && (
          <Box position="absolute" py="10px" pr="5px">
            <Skeleton width="150px" height="40px" />
          </Box>
        )}
        <StyledNumberInput
          decimalSeparator="."
          placeholder="0.0"
          thousandSeparator
          value={value}
          loading={loading}
          disabled={disableAmountInput}
          onValueChange={({ value: newValue }: { value: string }) => {
            if (newValue !== value) onUserInput(newValue)
          }}
        />
        {account && currency && showMaxButton && label !== 'To' ? (
          <Button onClick={onMax} scale="xs" variant="secondary" mt="1em">
            MAX
          </Button>
        ) : (
          <br />
        )}
      </Flex>
    </Box>
  )
}

export default React.memo(CurrencyInputPanel)
