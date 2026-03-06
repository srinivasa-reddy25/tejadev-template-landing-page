export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? ''

/**
 * Builds a link to the deployed app.
 * If NEXT_PUBLIC_APP_URL is set (e.g. "https://app.teja-reddy.me"),
 * returns an absolute URL. Otherwise falls back to a relative path
 * (useful during local development).
 */
export function appUrl(path: string): string {
  return APP_URL ? `${APP_URL}${path}` : path
}
