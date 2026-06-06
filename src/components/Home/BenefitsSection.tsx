"use client";

import styled from "styled-components";

import { Container } from "@/components/Layout/Container";

const Benefits = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: ${({ theme }) => theme.colors.background.subtle};
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 2rem;
`;

const CardsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BenefitCard = styled.article`
  padding: ${({ theme }) => theme.spacing.xl};

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.background.default};
`;

const BenefitTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};

  color: ${({ theme }) => theme.colors.text.heading};
`;

const BenefitText = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.5;
`;

export function BenefitsSection() {
  return (
    <Benefits id="beneficios">
      <Container>
        <SectionTitle>Por que usar a Lacrei Saúde?</SectionTitle>

        <CardsGrid>
          <BenefitCard>
            <BenefitTitle>Atendimento seguro</BenefitTitle>
            <BenefitText>
              Um espaço pensado para que cada pessoa se sinta respeitada ao
              buscar cuidado.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitTitle>Profissionais preparados</BenefitTitle>
            <BenefitText>
              Conexão com profissionais comprometidos com diversidade, inclusão
              e escuta qualificada.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitTitle>Acolhimento real</BenefitTitle>
            <BenefitText>
              Tecnologia usada como ponte para tornar o acesso à saúde mais
              humano e inclusivo.
            </BenefitText>
          </BenefitCard>
        </CardsGrid>
      </Container>
    </Benefits>
  );
}