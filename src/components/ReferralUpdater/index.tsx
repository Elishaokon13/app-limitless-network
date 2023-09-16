import { Web3Provider, TransactionResponse } from '@ethersproject/providers'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useLimitlessRefContract } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import React from 'react'
import { useTransactionAdder } from 'state/transactions/hooks'
import { useModal } from 'uikit'
import { isAddress } from 'utils'
import ReferralConfirmModal from './ReferralConfirmModal'

interface ReferralUpdaterProps {
  referrerId: string
}

const ReferralUpdater: React.FC<ReferralUpdaterProps> = ({ referrerId }) => {
  const { account } = useActiveWeb3React()
  const contract = useLimitlessRefContract()
  const [isReferred, setIsReferred] = React.useState(true)
  const [pendingTx, setPendingTx] = React.useState(false)
  const { toastError } = useToast()
  const { t } = useTranslation()

  const contractRef = React.useRef(contract)
  const addTransaction = useTransactionAdder()
  React.useEffect(() => {
    contractRef.current = contract
  }, [contract])

  const handleSetRef = React.useCallback(() => {
    setPendingTx(true)
    return contractRef.current
      .setReferrer(referrerId)
      .then((tx: TransactionResponse) => {
        addTransaction(tx, { summary: t('Set referral id') })

        onReferralConfirmModalPresentDismiss()
        tx.wait()
          .then(() => {
            setIsReferred(true)
          })
          .finally(() => {
            onReferralConfirmModalPresent()
          })
      })
      .catch((e) => {
        toastError(t('Set Referral Failed'), e.data?.message || e.message)
      })
      .finally(() => {
        setPendingTx(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referrerId, addTransaction])

  const [onReferralConfirmModalPresent, onReferralConfirmModalPresentDismiss] = useModal(
    <ReferralConfirmModal pendingTx={pendingTx} isReferred={isReferred} handleSetRef={handleSetRef} />,
    true,
    true,
    'referralModal',
  )
  React.useEffect(() => {
    if (referrerId && isAddress(referrerId) && account && contract.signer?.provider instanceof Web3Provider) {
      contract.isReferred(account).then((data: boolean) => {
        setIsReferred(data)
        if (!data) onReferralConfirmModalPresent()
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referrerId, account, contract])

  return null
}

export default React.memo(ReferralUpdater)
