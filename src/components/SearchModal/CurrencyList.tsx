import { CSSProperties, MutableRefObject, useCallback, useMemo } from 'react'
import { ChainId, Currency, CurrencyAmount, currencyEquals, Token, ETHER } from 'sdk'
import { IconButton, PinFillIcon, PinLineIcon, Text } from 'uikit'
import styled from 'styled-components'
import { FixedSizeList } from 'react-window'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import Column from '../Layout/Column'
import { RowFixed, RowBetween } from '../Layout/Row'
import { CurrencyLogo } from '../Logo'
import CircleLoader from '../Loader/CircleLoader'
import { useIsPinned } from 'state/user/hooks'

function currencyKey(currency: Currency, chainId: ChainId): string {
  return currency instanceof Token ? currency.address : currency === ETHER[chainId] ? 'ETHER' : ''
}

const StyledBalanceText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
`

function Balance({ balance }: { balance: CurrencyAmount }) {
  return <StyledBalanceText title={balance.toExact()}>{balance.toSignificant(4)}</StyledBalanceText>
}

const MenuItem = styled(RowBetween)<{ disabled: boolean; selected: boolean }>`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);
  grid-gap: 8px;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  :hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.background};
  }
  opacity: ${({ disabled, selected }) => (disabled || selected ? 0.5 : 1)};
`

function CurrencyRow({
  currency,
  onSelect,
  isSelected,
  otherSelected,
  style,
}: {
  currency: Currency
  onSelect: () => void
  isSelected: boolean
  otherSelected: boolean
  style: CSSProperties
}) {
  const { account, chainId } = useActiveWeb3React()
  const key = currencyKey(currency, chainId)
  const balance = useCurrencyBalance(account ?? undefined, currency)
  const [isPinned, togglePin] = useIsPinned(currency?.chainId, currency?.address)
  // only show add or remove buttons if not on selected list
  return (
    <MenuItem
      style={style}
      className={`token-item-${key}`}
      onClick={() => (isSelected ? null : onSelect())}
      disabled={isSelected}
      selected={otherSelected}
    >
      <CurrencyLogo currency={currency} size="24px" />
      <Column>
        <Text bold>{currency.symbol}</Text>
        <Text color="textSubtle" small ellipsis maxWidth="200px">
          {currency.name}
          {(otherSelected || isSelected) && ' (already selected)'}
        </Text>
      </Column>
      <RowFixed style={{ justifySelf: 'flex-end' }}>
        {balance ? <Balance balance={balance} /> : account ? <CircleLoader /> : null}
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
      </RowFixed>
    </MenuItem>
  )
}

export default function CurrencyList({
  height,
  currencies,
  selectedCurrency,
  onCurrencySelect,
  otherCurrency,
  fixedListRef,
  showETH,
}: {
  height: number
  currencies: Currency[]
  selectedCurrency?: Currency | null
  onCurrencySelect: (currency: Currency) => void
  otherCurrency?: Currency | null
  fixedListRef?: MutableRefObject<FixedSizeList | undefined>
  showETH: boolean
}) {
  const { chainId } = useActiveWeb3React()
  const itemData: (Currency | undefined)[] = useMemo(() => {
    return showETH ? [ETHER[chainId], ...currencies] : currencies
  }, [currencies, showETH, chainId])

  const Row = useCallback(
    ({ data, index, style }) => {
      const currency: Currency = data[index]
      const isSelected = Boolean(selectedCurrency && currencyEquals(selectedCurrency, currency))
      const otherSelected = Boolean(otherCurrency && currencyEquals(otherCurrency, currency))
      const handleSelect = () => {
        onCurrencySelect(currency)
      }

      return (
        <CurrencyRow
          style={style}
          currency={currency}
          isSelected={isSelected}
          onSelect={handleSelect}
          otherSelected={otherSelected}
        />
      )
    },
    [onCurrencySelect, otherCurrency, selectedCurrency],
  )

  const itemKey = useCallback((index: number, data: any) => currencyKey(data[index], chainId), [chainId])

  return (
    <FixedSizeList
      height={height}
      ref={fixedListRef as any}
      width="100%"
      itemData={itemData}
      itemCount={itemData.length}
      itemSize={56}
      itemKey={itemKey}
    >
      {Row}
    </FixedSizeList>
  )
}
