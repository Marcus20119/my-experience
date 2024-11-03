const getGoogleMapUrl = (
  latitude?: null | number,
  longitude?: null | number,
) => {
  if (latitude && longitude) {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
  }

  return '';
};

const getMailToUrl = (email?: null | string) => {
  if (!email) return '';

  return `mailto:${email}`;
};

const getPhoneCallUrl = (phoneNumber?: null | string) => {
  if (!phoneNumber) return '';

  return `tel:${phoneNumber}`;
};

const latinize = (str?: null | string) => {
  if (!str) return '';

  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const getSlug = (str?: null | string) => {
  if (!str) return '';

  return latinize(str)
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-z0-9-.]/g, '');
};

export const TextTool = {
  getGoogleMapUrl,
  getMailToUrl,
  getPhoneCallUrl,
  getSlug,
  latinize,
};
