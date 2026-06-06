"use client";

import styled from "styled-components";

import { Button } from "@/components/Button/Button";
import { InfoCard } from "@/components/InfoCard/InfoCard";
import { Container } from "@/components/Layout/Container";
import { professionals } from "@/data/professionals";
import { FiSearch } from "react-icons/fi";

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

const SearchBox = styled.form`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  padding: ${({ theme }) => theme.spacing.lg};

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.background.default};

  display: grid;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  min-height: 52px;
  padding: 0 ${({ theme }) => theme.spacing.md};

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 12px;

  background: ${({ theme }) => theme.colors.background.subtle};

  color: ${({ theme }) => theme.colors.text.body};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.border.accent};
    outline: 3px solid rgba(1, 135, 98, 0.18);
  }
`;

const SearchInput = styled.input`
  width: 100%;

  border: 0;
  outline: 0;
  background: transparent;

  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.body};
  }
`;

const ResultsSummary = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  color: ${({ theme }) => theme.colors.text.accent};
  font-weight: 800;
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

          <SearchBox
            aria-label="Busca simulada por profissionais"
            onSubmit={(event) => event.preventDefault()}
          >
            <InputWrapper>
              <FiSearch aria-hidden="true" />

              <SearchInput
                type="search"
                placeholder="Busque por especialidade, cidade ou tipo de atendimento"
                aria-label="Buscar profissionais"
              />
            </InputWrapper>

            <Button>Pesquisar</Button>
          </SearchBox>

          <ResultsSummary>
            {professionals.length} profissionais encontrados
          </ResultsSummary>

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
