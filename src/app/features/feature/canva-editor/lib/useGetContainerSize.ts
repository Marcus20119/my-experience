import { useMemo } from 'react';

interface Props {
  frameSize?:
    | {
        width: number;
        height: number;
      }
    | number;
  imageSize?: {
    width?: number;
    height?: number;
  };
}

export const useGetContainerSize = ({ frameSize, imageSize }: Props) => {
  const imageTagSize = useMemo(() => {
    let width = 0;
    let height = 0;

    if (!imageSize?.height || !imageSize?.width || !frameSize) {
      return {
        height: 0,
        width: 0,
      };
    }

    const frameWidth =
      (typeof frameSize === 'number' ? frameSize : frameSize.width) ?? 1;
    const frameHeight =
      (typeof frameSize === 'number' ? frameSize : frameSize.height) ?? 1;
    const imageWidth = imageSize?.width ?? 1;
    const imageHeight = imageSize?.height ?? 1;

    const frameRatio = frameWidth / frameHeight;
    const pictureRatio = imageWidth / imageHeight;

    // If picture ratio is bigger than frame ratio, then we need to
    if (pictureRatio >= frameRatio) {
      width = frameWidth;
      height = frameWidth / pictureRatio;
    } else {
      height = frameHeight;
      width = frameHeight * pictureRatio;
    }

    return {
      height,
      width,
    };
  }, [imageSize?.height, imageSize?.width, frameSize]);

  return imageTagSize;
};
