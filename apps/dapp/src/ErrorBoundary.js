import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: '',
      errorInfo: '',
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  handleReload() {
    window.location = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.parent}>
          <div>
            <h1>Something went wrong</h1>
            <button onClick={this.handleReload}>Get me out of here</button>
            {process.env.NODE_ENV === 'development' && (
              <details style={{ whiteSpace: 'pre-wrap', marginTop: '2em' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </details>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const styles = {
  parent: {
    display: 'flex',
    flexDirection: 'vertical',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '2em',
  },
};
