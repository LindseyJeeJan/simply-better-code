// `web-vitals` v5 changed exported types; define a local ReportHandler
// compatible with previous usage to avoid type errors when building.
type ReportHandler = (metric: any) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((wv) => {
      // use `any` to adapt to changed exports in web-vitals v5
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
