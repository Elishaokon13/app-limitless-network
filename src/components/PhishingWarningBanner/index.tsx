import React from 'react'
import styled from 'styled-components'
import { Text, Flex, Box, CloseIcon, IconButton } from 'uikit'
import { useTranslation } from 'contexts/Localization'
import { usePhishingBannerManager } from 'state/user/hooks'

const Container = styled(Flex)`
  overflow: hidden;
  height: 100%;
  padding: 12px;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondaryDark};
  box-shadow: 0px 0px 15px ${({ theme }) => theme.colors.secondaryDark};
`

const InnerContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const appUrl = 'https://app.limitlessnetwork.org'
const PhishingWarningBanner: React.FC = () => {
  const { t } = useTranslation()
  const [, hideBanner] = usePhishingBannerManager()
  const warningText = t(`Please make sure you're visiting ${appUrl}. Check the URL carefully.`)
  const warningTextAsParts = warningText.split(/(https:\/\/app.limitlessnetwork.org)/g)
  const warningTextComponent = (
    <>
      <Text as="span" color="failure" small bold textTransform="uppercase">
        {t('Phishing warning: ')}
      </Text>
      {warningTextAsParts.map((text, i) => (
        <Text
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          small
          as="span"
          bold={text === appUrl}
          color={text === appUrl ? 'failure' : '#BDC2C4'}
        >
          {text}
        </Text>
      ))}
    </>
  )
  return (
    <Container>
      <InnerContainer>
        <Box>{warningTextComponent}</Box>
      </InnerContainer>
      <IconButton onClick={hideBanner} variant="text">
        <CloseIcon color="#FFFFFF" />
      </IconButton>
    </Container>
  )
}

export default React.memo(PhishingWarningBanner)
