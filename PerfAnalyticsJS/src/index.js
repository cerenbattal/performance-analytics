class PerformanceAnalytics {
    constructor() {
        this.url = window.location.href,
        this.userAgent = navigator.userAgent
    }

    getResourceLoadTimes = (resourceListEntries) => {
        let resourceLoadsObject = {}, resourceLoadsArray = [];
        resourceListEntries.forEach(resource => {
            resourceLoadsObject = {
                resName: resource.name,
                resLoadTime: resource.responseEnd - resource.startTime
            }
            resourceLoadsArray.push(resourceLoadsObject);
        });
        return resourceLoadsArray;
    }

    isPerformanceSupported = () => {
        return window.performance && !!window.performance.getEntriesByType
    }

    getMetrics = () => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (this.isPerformanceSupported()) {
                    const perfNavigationEntries = performance.getEntriesByType("navigation")[0];
                    const perfPaintEntries = performance.getEntriesByType("paint")[0];
                    const resourceListEntries = performance.getEntriesByType("resource");
                    const performanceAnalytics = {
                        url: this.url,
                        userAgent: this.userAgent,
                        ttfb: perfNavigationEntries.responseStart - perfNavigationEntries.requestStart,
                        fcp: perfPaintEntries.startTime,
                        windowLoad: perfNavigationEntries.domContentLoadedEventEnd - perfNavigationEntries.domContentLoadedEventStart,
                        domLoad: perfNavigationEntries.domComplete,
                        resMetrics: this.getResourceLoadTimes(resourceListEntries)
                    }
                    console.log(performanceAnalytics);
                } else {
                    console.warn('Your browser does not support performance navigation api...')
                }
            }, 0)
        })
        
    }

    // TODO: gzip ??
    /*sendMetrics(metrics) {
        fetch(this.apiUrl, {
          method: 'PUT',
          headers: {
              'Content-Type': 'Application/json',
              'Content-Encoding': 'gzip'
          },
          body: JSON.stringify(metrics),
        }).then((response) => console.log(response.body));
    }*/

}

module.exports = PerformanceAnalytics;
