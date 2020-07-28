/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import VideoIframeResponsive from './VideoIframeResponsive';
import {
  BannerMainContainer,
  Container,
  Item,
  Title,
  Description,
  WatchButton,
} from './styles';
import { getYouTubeId } from '../../utils/getYoutubeId';
import { BannerProps } from './types';

const Banner: React.FC<BannerProps> = ({
  videoTitle,
  videoDescription,
  url,
}) => {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <Container>
        <Item>
          <Title>{videoTitle}</Title>
          <Description>{videoDescription}</Description>
        </Item>
        <Item>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <WatchButton>Assistir</WatchButton>
        </Item>
      </Container>
    </BannerMainContainer>
  );
};

export default Banner;
