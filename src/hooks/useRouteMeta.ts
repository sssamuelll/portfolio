import { useEffect } from 'react';

interface RouteMeta {
  /** Document title (also used as og:title and twitter:title). */
  title: string;
  /** Meta description (also used as og:description and twitter:description). */
  description: string;
  /** Absolute canonical URL for this route. */
  canonical: string;
}

function setMeta(selector: string, content: string) {
  const el = document.querySelector(selector) as HTMLMetaElement | null;
  if (el) el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Per-route meta tags without adding a dependency.
 *
 * Note: this only updates the DOM at runtime. Most social crawlers
 * (LinkedIn, Slack, Twitter card scraper, Facebook, WhatsApp) do NOT
 * execute JavaScript, so they read whatever ships in the static
 * `index.html`. Googlebot does run JS and will see the updated values.
 *
 * The static defaults in `index.html` describe the home, so a bare
 * sdar.dev share previews correctly. When sharing a deeper link
 * (e.g. /writing/about-japan), JS-capable crawlers will pick up the
 * route-specific metadata; legacy crawlers will fall back to the home
 * defaults — acceptable for a 1-post blog without SSR.
 */
export function useRouteMeta({ title, description, canonical }: RouteMeta) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setCanonical(canonical);
  }, [title, description, canonical]);
}
