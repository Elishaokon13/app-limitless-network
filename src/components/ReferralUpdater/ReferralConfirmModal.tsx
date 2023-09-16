import React from 'react'
import { Text, Button, Modal, Box } from 'uikit'
import { useTranslation } from 'contexts/Localization'
import TransactionConfirmationModal from 'components/TransactionConfirmationModal'
import { TransactionReceipt } from '@ethersproject/providers'

interface ReferralConfirmModalProps {
  onDismiss?: () => void
  isReferred: boolean
  handleSetRef: () => Promise<TransactionReceipt>
  pendingTx: boolean
}

const ReferralConfirmModal: React.FC<ReferralConfirmModalProps> = ({
  handleSetRef,
  onDismiss,
  isReferred,
  pendingTx,
}) => {
  const { t } = useTranslation()

  const title = t('Limitless Referral Program')

  if (pendingTx) {
    return (
      <TransactionConfirmationModal
        title={title}
        onDismiss={onDismiss}
        attemptingTxn={pendingTx}
        hash={undefined}
        content={() => null}
        pendingText=""
      />
    )
  }

  return (
    <Modal title={title} onDismiss={onDismiss}>
      <Box maxWidth="500px">
        {isReferred ? (
          <>
            <Text>{t("Thank you. We've registered your referral, and you're now free to swap.")}</Text>
            <Text mt="2em">
              {t(
                'If you want to refer your friends for Limitless$ token rewards, head over to the dashboard for your personalized link.',
              )}
            </Text>
            <Button mt="2em" onClick={onDismiss} width="100%">
              {t('Close')}
            </Button>
          </>
        ) : (
          <>
            <Text>
              {t(
                "It looks like you've been referred by a friend. Please confirm that your friend referred you so that they get referral credit when you make a transaction. The referral rewards come directly from the Limitless reward pool — not your transactions.",
              )}
            </Text>
            <Button mt="2em" onClick={handleSetRef} width="100%">
              {t('Confirm referral')}
            </Button>
          </>
        )}
      </Box>
    </Modal>
  )
}

export default ReferralConfirmModal
