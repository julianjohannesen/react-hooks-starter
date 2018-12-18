import React, { PureComponent } from 'react';

import Raven from 'raven-js';
import Rollbar from 'rollbar';
// import fixIt, { options } from 'react-fix-it';

// settings for fixIt
// options.log = test => {
//   console.warn(test);
// };

if (process.env.NODE_ENV !== 'development') {
  Raven.config(process.env.REACT_APP_RAVEN).install();

  // Disable ESLint error as Rollbar requires the underscore prefix
  // eslint-disable-next-line no-underscore-dangle
  const _rollbarConfig = { // eslint-disable-line no-unused-vars
    accessToken: process.env.REACT_APP_ROLLBAR,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'production',
    },
    enabled: (process.env.NODE_ENV !== 'development'),
  };
}

class ErrorBoundary extends PureComponent {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    Rollbar.error(error); // Send it to Rollbar!
    Raven.captureException(error, { extra: info }); // Send it to Sentry
  }

  render() {
    const { componentName, children } = this.props;
    const { hasError } = this.state;

    return (
      (process.env.NODE_ENV !== 'development' && hasError)
        ? (
          <div>
            <h4>
              {componentName && `Component: ${componentName} disabled`}
            </h4>
            <div className="snap">
              <div className="snap-message">
                <p>
                  We&apos;re sorry - something&apos;s gone wrong.
                </p>
                <p>
                  Our team has been notified, but
                  <button onClick={() => Raven.lastEventId() && Raven.showReportDialog()} type="button">
                    you can click here
                  </button>
                  to fill out a report.

                </p>
              </div>
            </div>
          </div>
        )
        : children
    );
  }
}

// export default fixIt(ErrorBoundary);
export default ErrorBoundary;
