/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { getYouTubeId } from '../../../utils/getYoutubeId';

import { VideoCardContainer } from './styles';
import { VideoCardProps } from './types';

const VideoCard: React.FC<VideoCardProps> = ({
  videoTitle,
  videoURL,
  categoryColor,
}) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL,
  )}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target='_blank'
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
};

export default VideoCard;
