import { BoxProps } from 'uikit'

export interface SwipeLink {
  href?: string
  Icon: JSX.Element
}

export interface ScrollableTokenLinksProps extends BoxProps {
  swipeLinks: SwipeLink[]
  title?: string
}
