"use client";

import styled from "styled-components";

import { Container } from "@/components/Layout/Container";
import { InfoCard } from "@/components/InfoCard/InfoCard";

import { professionals } from "@/data/professionals";

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  color: ${({ theme }) => theme.colors.text.heading};
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  grid-template-columns: repeat(
    auto-fit,
    minmax(280px, 1fr)
  );
`;

export default function ProfessionalsPage() {
  return (
    <Main>

      <Container>

        <Title>
          Profissionais
        </Title>

        <Grid>

          {professionals.map((professional) => (
            <InfoCard
              key={professional.id}
              name={professional.name}
              specialty={professional.specialty}
              city={professional.city}
            />
          ))}

        </Grid>

      </Container>

    </Main>
  );
}