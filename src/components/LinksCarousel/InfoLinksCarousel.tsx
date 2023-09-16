import React from 'react'
import LinksCarousel from './LinksCarousel'
import { ScrollableTokenLinksProps } from './types'

const InfoLinksCarousel: React.FC<Omit<ScrollableTokenLinksProps, 'swipeLinks'>> = (props) => {
  return (
    <LinksCarousel
      {...props}
      swipeLinks={
        [
          // {
          //   href: externalLinks.guardianAudit,
          //   Icon: <GuardianAuditIcon width="120px" color="white" />,
          // },
          // {
          //   href: externalLinks.nomics,
          //   Icon: <NomicsWholeIcon width="120px" color="white" />,
          // },
          // {
          //   href: externalLinks.dappRador,
          //   Icon: <DappRadarIcon width="120px" color="white" />,
          // },
          // {
          //   href: externalLinks.bscScan,
          //   Icon: <BSCScanWholeIcon width="120px" color="white" />,
          // },
        ]
      }
    />
  )
}

export default InfoLinksCarousel
