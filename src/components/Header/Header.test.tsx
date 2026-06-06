import { render, screen } from "@/tests/test-utils";

import { Header } from "./Header";

describe("Header", () => {
  it("renderiza a marca e links principais", () => {
    render(<Header />);

    expect(screen.getByText("Lacrei Saúde")).toBeInTheDocument();

    expect(screen.getAllByText("Quem somos").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Ajuda").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Entrar").length).toBeGreaterThan(0);
  });
});