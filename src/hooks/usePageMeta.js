import { useEffect } from "react";

const BASE_URL = "https://gokul-maithani.vercel.app";

export default function usePageMeta({ title, description, path, ogImage }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute("content", description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && path) {
      ogUrl.setAttribute("content", BASE_URL + path);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && path) {
      canonical.setAttribute("href", path === "/" ? BASE_URL + "/" : BASE_URL + path);
    }

    if (ogImage) {
      const ogImageEl = document.querySelector('meta[property="og:image"]');
      if (ogImageEl) {
        ogImageEl.setAttribute("content", BASE_URL + ogImage);
      }
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute("content", BASE_URL + ogImage);
      }
    }
  }, [title, description, path, ogImage]);
}