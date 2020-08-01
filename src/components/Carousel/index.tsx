import React from 'react'
import Slider from './Slider'

import VideoCard from './VideoCard'
import { VideoCardGroupContainer, Title, ExtraLink, SliderItem } from './styles'
import { CarouselProps } from './types'

const Carousel: React.FC<CarouselProps> = ({ ignoreFirstVideo, category }) => {
  const { categoryTitle } = category
  const categoryColor = category.color
  const categoryExtraLink = category.link_extra
  const { videos } = category
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }
          return (
            <SliderItem key={video.videoTitle}>
              <VideoCard
                videoTitle={video.videoTitle}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </VideoCardGroupContainer>
  )
}

export default Carousel
