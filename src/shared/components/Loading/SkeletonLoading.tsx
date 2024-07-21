import { StyledSkeletonLoading } from './styles';

interface Props {
  className?: string;
  height?: number | string;
  width?: number | string;
}

function SkeletonLoading({ height, width, className }: Props) {
  return (
    <StyledSkeletonLoading
      style={{
        width: width ?? '100%',
        height: height ?? '100%',
      }}
      className={className}
    />
  );
}

export default SkeletonLoading;
