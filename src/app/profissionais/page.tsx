"use client";

import styled from "styled-components";

import { Button } from "@/components/Button/Button";
import { InfoCard } from "@/components/InfoCard/InfoCard";
import { Container } from "@/components/Layout/Container";
import { professionals } from "@/data/professionals";

const Main = styled.main``;

const Hero = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: ${({ theme }) => theme.colors.background.subtle};
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Badge = styled.span`
  width: fit-content;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};

  border-radius: 999px;
  background: ${({ theme }) => theme.colors.background.default};

  color: ${({ theme }) => theme.colors.text.accent};
  font-weight: 700;
`;

const Title = styled.h1`
  max-width: 760px;

  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 2.25rem;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  max-width: 720px;

  color: ${({ theme }) => theme.colors.text.body};
  font-size: 1.125rem;
  line-height: 1.6;
`;

const CardsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const SectionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 2rem;
`;

const SectionText = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export default function ProfessionalsPage() {
  return (
    <Main>
      <Hero>
        <Container>
          <HeroContent>
            <Badge>Rede de cuidado</Badge>

            <Title>
              Encontre profissionais preparados para cuidar de você com
              respeito.
            </Title>

            <Description>
              Navegue por uma lista simulada de profissionais comprometidos com
              atendimento inclusivo, seguro e acolhedor para pessoas LGBTQIA+.
            </Description>

            <Button href="/">Voltar para início</Button>
          </HeroContent>
        </Container>
      </Hero>

      <CardsSection>
        <Container>
          <SectionHeader>
            <SectionTitle>Profissionais disponíveis</SectionTitle>

            <SectionText>
              Esta listagem utiliza dados mockados localmente para simular uma
              integração com API.
            </SectionText>
          </SectionHeader>

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
      </CardsSection>
    </Main>
  );
}