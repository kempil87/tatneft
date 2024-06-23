import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

export interface ErrorBoundaryProps extends PropsWithChildren {
  content?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Caught an error-boundary:', error, errorInfo);

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='bg-bg fixed inset-0 overflow-hidden'>
          {this.props.content || (
            <div className='h-screen flex-center'>
              Error Boundary started work
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
