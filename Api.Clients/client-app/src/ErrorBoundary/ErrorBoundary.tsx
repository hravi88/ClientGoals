/* eslint-disable react/require-default-props */
import * as React from 'react';
import UIError from './Error';

type Props = {
   children: React.ReactNode;
};

type IErrorState = {
    hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, IErrorState> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): IErrorState {
        return { hasError: true };
    }

    render() : React.ReactNode {
        if (this.state.hasError) {
            return <UIError />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
