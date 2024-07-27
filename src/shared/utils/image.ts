export interface ImageSize {
  height?: number;
  width?: number;
}

export const resizeUrl = (url: string, size?: ImageSize): string => {
  const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL;

  if (!size || !baseImageUrl || !url?.match(baseImageUrl)) return url;

  const key = url?.split('/')?.length > 1 ? url?.split('/')?.pop() : null;

  if (!key) return url;

  const { height, width } = size;
  const formattedUrl = `${import.meta.env.VITE_RESIZE_IMAGE_URL}/${key}?size=${width ? width : ''}${
    height?.toString() ? `x${height}` : ''
  }`;

  return formattedUrl;
};

export const ImageTool = {
  resizeUrl,
};
