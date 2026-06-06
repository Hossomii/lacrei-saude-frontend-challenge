import { render, screen } from "@/tests/test-utils";

import { Button } from "./Button";

describe("Button", () => {
  it("renderiza o texto do botão", () => {
    render(
      <Button>
        Encontrar profissionais
      </Button>
    );

    expect(
      screen.getByText("Encontrar profissionais")
    ).toBeInTheDocument();
  });
});