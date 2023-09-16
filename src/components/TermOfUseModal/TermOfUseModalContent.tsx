
 import { Box, Button, Flex, Link, Modal, Text, } from 'uikit'
 import { memo, useState } from 'react'
 import { useTranslation } from 'contexts/Localization'
 import { externalLinks } from 'utils/links'

 interface TermOfUseModalContentProps {
   onDismiss?: () => void
   handleAgree: (isAgreedWithCookie: boolean) => void
 }


 const TermOfUseModalContent: React.FC<TermOfUseModalContentProps> = ({ onDismiss, handleAgree }) => {
   const [isDisagree, setIsDisagree] = useState(false)

   const { t } = useTranslation()

   return (
     <Modal title={t('LNT Terms of Use')} hideCloseButton>
       <Box maxWidth="500px">
         {isDisagree ? (
           <>
             <Text>{t("We're sorry. This site is not available when you do not accept the Terms of Use.")}</Text>

             <Button
               mt="1em"
               width="100%"
               onClick={() => {
                 setIsDisagree(false)
               }}
             >
               {t('Go back')}
             </Button>
           </>
         ) : (
           <>

             <Text>
               {t(
                 'Before you start please make sure that you read and understand the Terms of Use.',
               )}
             </Text>
             <Text>
               You can{' '}
               <Link bold color="secondary" external href={externalLinks.terms}>
                 view the Terms of Use here.
               </Link>{' '}
             </Text>
             <br />



             <Flex>
               <Button
                 m="0.5em"
                 variant="secondary"
                 width="100%"
                 onClick={() => {
                   setIsDisagree(true)
                 }}
               >
                 {t('I do not agree')}
               </Button>
               <Button
                 m="0.5em"
                 variant="primary"
                 width="100%"
                 onClick={() => {
                   handleAgree(true)
                   onDismiss()
                 }}
               >
                 {t('I agree to the Terms of Use')}
               </Button>
             </Flex>
           </>
         )}
       </Box>
     </Modal>
   )
 }

 export default memo(TermOfUseModalContent)