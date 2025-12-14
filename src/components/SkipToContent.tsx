export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-cornflower-blue-500 focus:px-4 focus:py-2 focus:text-eggshell-50 focus:outline-none focus:ring-2 focus:ring-cornflower-blue-700"
    >
      Skip to main content
    </a>
  );
}
