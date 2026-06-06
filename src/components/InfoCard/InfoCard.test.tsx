import { render, screen } from "@/tests/test-utils";

import { InfoCard } from "./InfoCard";

describe("InfoCard", () => {
  it("renderiza informações do profissional", () => {
    render(
      <InfoCard
        name="Ana Silva"
        specialty="Psicóloga"
        city="São Paulo"
      />
    );

    expect(screen.getByText("Ana Silva")).toBeInTheDocument();
    expect(screen.getByText("Psicóloga")).toBeInTheDocument();
    expect(screen.getByText("São Paulo")).toBeInTheDocument();
    expect(screen.getByText("Atendimento Inclusivo")).toBeInTheDocument();
  });
});