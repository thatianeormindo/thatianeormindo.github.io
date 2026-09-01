/**
 * Error reporting utilities for runtime error tracking
 * 
 * This can be integrated with external services like Sentry, LogRocket, etc.
 * Currently logs errors to console for development purposes.
 */

type ErrorContext = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  severity?: "error" | "warning" | "info";
  route?: string;
  [key: string]: unknown;
};

/**
 * Report an error with optional context information
 * @param error - The error to report
 * @param context - Additional context about the error
 * 
 * @example
 * ```ts
 * try {
 *   // some operation
 * } catch (error) {
 *   reportError(error, { route: "/projects", severity: "error" });
 * }
 * ```
 */
export function reportError(error: unknown, context: ErrorContext = {}) {
  if (typeof window === "undefined") return;

  // Extract error details
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  const stack = error instanceof Error ? error.stack : undefined;

  const errorInfo = {
    message,
    stack,
    pathname: window.location.pathname,
    ...context,
  };

  // Log to console in development
  console.error("Error reported:", errorInfo);

  // TODO: Integrate with external error tracking service
  // Examples: Sentry, LogRocket, Rollbar
  // sentry.captureException(error, { contexts: { errorInfo } });
}
