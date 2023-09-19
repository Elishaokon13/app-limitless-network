import React from 'react'
import { ModalBody, ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton } from './styles'
import { ModalProps } from './types'
import LogoSrc from 'assets/limitlesslogo.png'
import Image from 'next/image'

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

const Modal: React.FC<ModalProps> = ({
  title,
  subTitle,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = '24px',
  minWidth = '320px',
  ...props
}) => {
  return (
    <ModalContainer minWidth={minWidth} {...props}>
      <ModalHeader>
        <ModalTitle>
          {onBack && <ModalBackButton onBack={onBack} />}
          <RewardsTitle/>
        </ModalTitle>
        {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
      </ModalHeader>
      <ModalBody p={bodyPadding}>{children}</ModalBody>
    </ModalContainer>
  )
}

export default Modal
