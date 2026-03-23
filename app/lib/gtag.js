export const GA_TRACKING_ID = "G-WBDP57SGE8";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};