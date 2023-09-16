import { useModal } from 'uikit'
import { memo, useMemo, useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { consentGA } from 'hooks/useGA'
import TermOfUseModalContent from './TermOfUseModalContent'

const TERM_STORAGE_KEY = 'term-consens'
const COOKIES_STORAGE_KEY = 'cookies-consens'

const TermOfUseModal = () => {
  const router = useRouter()
  const [isAgreed, setIsAgreed] = useState(false)

  const handleAgree = useCallback((agreedOnCookie: boolean) => {
    localStorage.setItem(TERM_STORAGE_KEY, 'agreed')
    if (agreedOnCookie) {
      localStorage.setItem(COOKIES_STORAGE_KEY, 'agreed')
      consentGA()
    }
  }, [])

  const [openModal] = useModal(
    useMemo(() => <TermOfUseModalContent handleAgree={handleAgree} />, []),
    false,
  )

  useEffect(() => {
    if (!isAgreed) {
      const localStorageAgreed = localStorage.getItem(TERM_STORAGE_KEY) === 'agreed'
      if (localStorageAgreed) {
        setIsAgreed(true)

        if (localStorage.getItem(COOKIES_STORAGE_KEY) === 'agreed') {
          consentGA()
        }
      } else {
        openModal()
      }
    }
  }, [router.pathname, isAgreed, openModal])

  return null
}

export default memo(TermOfUseModal)
