import * as React from 'react'
import * as Sentry from '@sentry/browser'

export { Sentry }

export interface RavenErrorBoundaryProps {}

export class RavenErrorBoundary extends React.PureComponent<
  RavenErrorBoundaryProps
> {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error })
    Sentry.configureScope(scope => {
        const eventId = Sentry.captureException(error);
        this.setState({eventId})
        scope.setExtras(errorInfo);
        
    })
    Sentry.captureException(error)
  }

  render() {
    return this.props.children
  }
}


const VERSIONS = '0.0.1'
export const initRaven = (
  dsn: string,
  initOptions?: Partial<Sentry.BrowserOptions>,
) => {
  const debug = process.env.NODE_ENV !== 'production'
  Sentry.init({
    ...initOptions,
    dsn,
    release: VERSIONS,
    debug,
    beforeSend(event, hint) {
      if (hint && hint.originalException) {
        if (hint.originalException.message.indexOf('DesktopClientObject') > -1) return null
      } else {
        console.error(event.message, event)
      }

      return debug ? null : event
    },
  })
}
