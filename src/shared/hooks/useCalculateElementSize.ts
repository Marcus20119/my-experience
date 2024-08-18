import { useWindowDimensions } from './useWindowDimensions';

interface Props {
  heightOffset?: number;
  widthOffset?: number;
}

export const useCalculateElementSize = ({
  heightOffset,
  widthOffset,
}: Props) => {
  const { height, width } = useWindowDimensions();

  return {
    height: height - (heightOffset || 0),
    width: width - (widthOffset || 0),
  };
};
