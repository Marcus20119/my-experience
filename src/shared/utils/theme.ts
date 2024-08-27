function setWebsiteTitle(title: string) {
  document.title = title;
}

function setWebIcon(iconUrl?: string) {
  if (!iconUrl) {
    return;
  }

  // Select the head element
  const [head] = document.getElementsByTagName('head');

  if (!head) {
    return;
  }

  // Remove existing favicon links
  const existingIcons = head.querySelectorAll("link[rel*='icon']");
  existingIcons.forEach(icon => {
    if (icon?.parentNode) {
      icon.parentNode.removeChild(icon);
    }
  });

  // Create a new favicon link
  const link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = iconUrl;

  // Append the new favicon link to the head
  head.appendChild(link);
}

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length == 1 ? `0${hex}` : hex;
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        b: parseInt(result[3], 16),
        g: parseInt(result[2], 16),
        r: parseInt(result[1], 16),
      }
    : null;
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function getHexColorVariant(color?: string, lightVolume?: number) {
  if (!color || !lightVolume) {
    return '';
  }

  const { b, g, r } = hexToRgb(color) || { b: 0, g: 0, r: 0 };

  return rgbToHex(
    Math.round(r + (255 - r) * lightVolume),
    Math.round(g + (255 - g) * lightVolume),
    Math.round(b + (255 - b) * lightVolume),
  );
}

export const ThemeTool = {
  getHexColorVariant,
  setWebIcon,
  setWebsiteTitle,
};
