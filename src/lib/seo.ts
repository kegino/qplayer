export const SITE_URL = "https://qplayer.site";
export const SITE_NAME = "QPlayer";
export const SITE_TAGLINE = "O Player IPTV de Alta Performance com Transmissão Sem Travamentos";
export const SITE_DESCRIPTION = "QPlayer: reprodutor de IPTV em 4K e Full HD com alta performance, grade de canais completa, filmes, séries e esportes ao vivo sem travamentos.";
export const DEFAULT_OG_IMAGE = "https://qplayer.site/og-image.webp";

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
}
