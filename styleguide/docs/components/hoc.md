Higher-order components (HOC) are components that wrap other components. Our main HOC in the `<Nautilus>` provider component, which accepts a `theme` prop and supplies all child components with that theme.

You'll want to wrap all content that uses any Nautilus component with the `<Nautilus>` provider or it will error; likely with a "`theme` not found" error.
