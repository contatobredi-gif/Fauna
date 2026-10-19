import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('FAUNA Application Uncaught Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#FAF8F5] text-[#1D2B24] text-center">
          <div className="w-16 h-16 rounded-full bg-[#123524] text-[#C9A44C] flex items-center justify-center mb-6 font-serif text-2xl font-bold">
            F
          </div>
          <h1 className="font-serif text-3xl font-semibold mb-3 text-[#123524]">
            FAUNA — Faculdade Universo da Amazônia
          </h1>
          <p className="max-w-md text-sm text-[#57685F] mb-6">
            Ocorreu uma instabilidade momentânea na exibição desta página. Clique no botão abaixo para restaurar a navegação.
          </p>
          <button
            type="button"
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            className="px-6 py-2.5 bg-[#123524] hover:bg-[#0A1F15] text-[#FAF8F5] text-sm font-medium rounded-lg transition-colors shadow-md"
          >
            Recarregar Aplicação
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
