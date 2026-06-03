"use client";

import styled from "styled-components";
import { Container } from "@/components/Layout/Container";

const Main = styled.main`
  min-height: 100vh;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.accent};
`;

export default function Home() {
  return (
    <Main>
      <Container>
        <Title>Projeto Lacrei Saúde</Title>

        <p>Container funcionando</p>
      </Container>
    </Main>
  );
}