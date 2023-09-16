import React from 'react'
import { Autoplay, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Styles must use direct files imports
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/scrollbar'

import { Box, Text } from 'uikit'
import { breakpointMap } from 'uikit/theme/base'
import styled from 'styled-components'
import { ScrollableTokenLinksProps } from './types'
import { baseColors } from 'uikit/theme/colors'

const modules: any[] = [Autoplay, Scrollbar]

export const StyledRibbon = styled(Box)`
  display: flex;
  background: ${baseColors.limitlessBlue};
  color: ${({ theme }) => theme.colors.invertedContrast};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const StyledSwiperContainer = styled.div<{ color?: string }>`
  & .swiper-pagination-bullet {
    background: ${({ theme, color }) => theme.colors[color]};
  }
  & .swiper-pagination {
    margin-bottom: -5px;
  }
  & .swiper-slide {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
  }
  max-width: ${breakpointMap.xxl}px;
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`

const LinksCarousel: React.FC<ScrollableTokenLinksProps> = ({ swipeLinks, title, ...boxProps }) => {
  return (
    <StyledRibbon {...boxProps}>
      {title && (
        <Text color="inherit" fontSize={{ xs: '2em', lg: '2.5em' }} mt="0.4em" fontWeight="500">
          {title}
        </Text>
      )}
      <StyledSwiperContainer color="invertedContrast">
        <Swiper
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 3000,
          }}
          spaceBetween={40}
          slidesPerView="auto"
          modules={modules}
          scrollbar={{ draggable: true, hide: true }}
        >
          {swipeLinks.map(({ href, Icon }, i) => {
            const inner = href ? (
              <a href={href} target="_blank" rel="noreferrer">
                {Icon}
              </a>
            ) : (
              Icon
            )
            return <SwiperSlide key={i}>{inner}</SwiperSlide>
          })}
        </Swiper>
      </StyledSwiperContainer>
    </StyledRibbon>
  )
}

export default LinksCarousel
