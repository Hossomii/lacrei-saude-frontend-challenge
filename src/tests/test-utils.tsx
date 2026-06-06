import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";

type TestProvidersProps = {
  children: React.ReactNode;
};

function TestProviders({ children }: TestProvidersProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const customRender = (ui: React.ReactElement) => {
  return render(ui, { wrapper: TestProviders });
};

export * from "@testing-library/react";
export { customRender as render };