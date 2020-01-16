import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '', errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Display fallback UI
    this.setState({ hasError: true, error, errorInfo });
    // Optionally: log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div>
          <h2>Something went wrong</h2>
          <pre>{this.state.error.toString()}</pre>
        </div>
      )

    }
    return this.props.children;
  }
}

export default ErrorBoundary