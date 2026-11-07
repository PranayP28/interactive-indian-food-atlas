import { Component, ErrorInfo, ReactNode } from "react";
import { ArrowLeft, RefreshCw, AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  onReset?: () => void;
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
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#faf8f5] text-slate-800 flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white border border-amber-200/80 shadow-xl rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              {this.props.fallbackTitle || "Something went wrong loading this view"}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We encountered an unexpected error while preparing this dish experience.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  if (this.props.onReset) {
                    this.props.onReset();
                  } else {
                    window.location.hash = "#/map";
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Map</span>
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
