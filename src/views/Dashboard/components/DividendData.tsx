import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { Skeleton, Button, useModal, Box } from 'uikit'
import { stringToFixed, canCollect } from 'utils/limitlessUtils'
import { useLimitlessTokenBalance, useLimitlessDividendInfo, useLimitlessWithdrawable, useLimitlessWithdraw } from 'hooks/useLimitlessContractHandler'
import ConnectWalletButton from 'components/ConnectWalletButton'
import BNBBalance from 'components/BNBBalance'
import LNTBalance from 'components/LNTBalance'
import { StyledBorderCard } from '../styled'
import DisplayHelper from './DisplayHelper'
import WithdrawDividendModal from './WithdrawDividendModal'
import LogoSrc from 'assets/limitlesslogo.png'
import Image from 'next/image'

interface DividendDataProps {
  account: string
}

const LNTLogo = () => {
  return (
    <>
      <Image src={LogoSrc} alt="Logo" width={50} height={50} />
    </>
)}

const RewardsTitle = () => {
  return(
    <div style={{display: "flex", width: "175px"}}>
      <div style={{flex: 1}}>
        <LNTLogo />
      </div>
      <div style={{flex: 2, alignSelf: "center"}}>
        <div>
          <p style={{fontSize: "20px"}}>Limitless Rewards</p>
        </div>
      </div>
    </div>
  )
}


const DividendData: React.FC<DividendDataProps> = ({ account }) => {
  const { t } = useTranslation()  

  const {balance, balanceFetchStatus} = useLimitlessTokenBalance()
  const {dividends, dividendsFetchStatus} = useLimitlessDividendInfo()
  //const dividendsLoading = (dividendsFetchStatus === "success")
  const {withdrawableDividends, withdrawableDividendsFetchStatus} = useLimitlessWithdrawable()
  //const wDividendsLoading = (withdrawableDividendsFetchStatus === "success")
  const fetchDividend = () => {}
  const dividendsReceived = dividends? dividends[0] : null

  const balanceDisplayValue = balance ? `${stringToFixed(balance, 2)} LNT` : '- '

  const withdrawableDividendsDisplayStr = withdrawableDividends ? stringToFixed(withdrawableDividends, 4) : null
  const availableDividendDisplayValue = withdrawableDividends ? `${withdrawableDividendsDisplayStr} BNB` : '-'

  const dividendsReceivedDisplayStr = dividends ? stringToFixed(dividendsReceived, 4) : null
  const dividendsReceivedDisplayValue = dividends ? `${dividendsReceivedDisplayStr} BNB` : '-'

  const {claimLoading, handleClaim} = useLimitlessWithdraw(fetchDividend)
  const [onPresentWithdrawModal] = useModal(<WithdrawDividendModal onConfirm={handleClaim} />)  

  let buttonText
  if (claimLoading){
    buttonText = <b>{t('Collecting...')}</b>
  } else if (parseFloat(withdrawableDividends) >= 0.0001){
    buttonText = <b>{t('Collect Rewards')}</b>
  } else {
    buttonText = <b>{t('No Rewards Available')}</b>
  }

  return (
    <StyledBorderCard>
      <RewardsTitle/>
      <br />
      <DisplayHelper label={t('Token Balance')}>
        {(balanceFetchStatus === 'success') ? (
          <>
            {balanceDisplayValue} <LNTBalance value={balance} />
          </>
        ) : (          
          <Skeleton height="30px" width="10ch" />
        )}
      </DisplayHelper>
      <br />
      <DisplayHelper
        label={t('Rewards available to collect')}
        tooltip={t(
          'This is the amount of rewards still to be collected. Click "Collect Rewards" below to withdraw your rewards to your wallet.',
        )}
      >
        {(withdrawableDividendsFetchStatus === 'success') ? (
          <>
            {availableDividendDisplayValue} <BNBBalance value={withdrawableDividends} />
          </>
        ) : (
          <Skeleton height="30px" width="5ch" />
        )}
      </DisplayHelper>
      <br />
      <DisplayHelper
        label={t('Total rewards already collected')}
        tooltip={t(
          'This is the amount of rewards this wallet has already received from Limitless Network. Note you will periodically receive an automatic reward payout, which is included in this total.',
        )}
      >
        {(dividendsFetchStatus === 'success') ? (
          <>
            {dividendsReceivedDisplayValue} <BNBBalance value={dividendsReceived} />
          </>
        ) : (
          <Skeleton height="30px" width="5ch" />
        )}
      </DisplayHelper>
      <br />

      <Box height={{ xs: 15, md: 20 }} />
      {account ? (
        <Button
          width="100%"
          isLoading={claimLoading}
          height="50px"
          scale="md"
          disabled={!canCollect(withdrawableDividends)}
          color="primary"
          onClick={() => {
            onPresentWithdrawModal()
          }}
        >
          {buttonText}
        </Button>
      ) : (
        <ConnectWalletButton width="100%" />
      )}
    </StyledBorderCard>
  )
}

export default React.memo(DividendData)
