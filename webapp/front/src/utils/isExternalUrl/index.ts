const base = new URL(`${window.location.protocol}//${window.location.host}`);

export const isExternalUrl = (url: string) =>
  new URL(url, base).hostname !== window.location.hostname;
