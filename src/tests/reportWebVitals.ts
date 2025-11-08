// `web-vitals` v5 changed exported functions/types. Use runtime-safe access
// so TypeScript doesn't error when the package shape differs.
type ReportHandler = (metric: any) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((wv) => {
      const webVitals: any = wv;
      webVitals.getCLS?.(onPerfEntry);
      webVitals.getFID?.(onPerfEntry);
      webVitals.getFCP?.(onPerfEntry);
      webVitals.getLCP?.(onPerfEntry);
      webVitals.getTTFB?.(onPerfEntry);
    });
  }
};

export default reportWebVitals;
