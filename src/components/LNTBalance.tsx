import { TextProps } from 'uikit'
import React from 'react'
import styled from 'styled-components'
import Balance from './Balance'
import { baseColors } from 'uikit/theme/colors'
import { useLNTStatePriceFixed } from 'state/global/hooks'

interface LNTBalanceProps extends TextProps {
  value: string | number
}

const StyledInlineWrapper = styled.span`
  display: inline-block;
`

const LNTBalance: React.FC<LNTBalanceProps> = ({ value }) => {
  const lntPrice = useLNTStatePriceFixed()
  const lntBalance = parseFloat(value.toString())
  const lntBusd = React.useMemo(() => {
    if (value && lntPrice) {
      return parseFloat(lntPrice) * lntBalance
    }
    return 0
  }, [value, lntPrice])

  if (lntBusd <= 0) {
    return null
  }

  return (
    <StyledInlineWrapper>
      <Balance fontSize="14px" color={baseColors.limitlessBlue} decimals={2} value={lntBusd} unit=" USD" />
    </StyledInlineWrapper>
  )
}

export default React.memo(LNTBalance)
