import React from 'react'
import { Currency } from 'sdk'
import { Skeleton, Tag } from 'uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useBusdPrice from 'hooks/useBUSDPrice'
import BigNumber from 'bignumber.js'

const StyledTokenUSDPriceTag = styled(Tag)`
  position: absolute;
  left: 0px;
  height: 60px;
  margin-top: 0px;
  font-size: 12px;
  width: 94px;
  line-height: 1.5;
  border-radius: 5px 0px 0px 5px;
  white-space: normal;
  background: transparent;
`

const StyledTokenUSDPriceLabel = styled.span`
  line-height: 14px;
  font-weight: bold;
  font-size: 11px;
  font-family: Arial; // use arial in here because safari acting weird in other font with smaller bold size
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary};
`

const StyledTokenUSDPrice = styled.span`
  float: right;
`

const StyledDiv = styled.div`
  width: 100%;
`

interface USDPriceTagProps {
  currency?: Currency | null
}

const USDPriceTag = ({ currency }: USDPriceTagProps) => {
  const price = useBusdPrice(currency)
  const { t } = useTranslation()

  const formattedPrice = React.useMemo(() => {
    if (price) {
      const bg = new BigNumber(price.toSignificant())
      if (bg.lt(0.000001)) {
        return '< 0.000001'
      }
      return bg.decimalPlaces(6).precision(18).toString()
    }
    return ''
  }, [price])

  return (
    <StyledTokenUSDPriceTag variant="secondary">
      <StyledDiv>
        <StyledDiv>
          <StyledTokenUSDPriceLabel>{t('USD per Token')}</StyledTokenUSDPriceLabel> <br />$
          <StyledTokenUSDPrice>
            {!formattedPrice ? <Skeleton width="50px" minHeight="13px" /> : formattedPrice}
          </StyledTokenUSDPrice>
        </StyledDiv>
      </StyledDiv>
    </StyledTokenUSDPriceTag>
  )
}

export default React.memo(USDPriceTag)
