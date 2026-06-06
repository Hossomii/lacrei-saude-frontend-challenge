"use client";

import styled from "styled-components";

import { Container } from "@/components/Layout/Container";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.3fr 0.7fr;
    align-items: center;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 2rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.7;
`;

const StatsCard = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};

  background: ${({ theme }) => theme.colors.background.subtle};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
`;

const Number = styled.span`
  color: ${({ theme }) => theme.colors.text.accent};
  font-size: 2rem;
  font-weight: 800;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.text.body};
`;

export function AboutSection() {
  return (
    <Section>
      <Container>
        <Content>
          <TextContent>
            <Title>Por que a Lacrei Saúde existe?</Title>

            <Description>
              Muitas pessoas LGBTQIA+ enfrentam dificuldades para encontrar
              profissionais de saúde que ofereçam atendimento respeitoso,
              seguro e livre de discriminação.
            </Description>

            <Description>
              A Lacrei Saúde nasceu para conectar pacientes a profissionais
              comprometidos com diversidade, inclusão e acolhimento,
              tornando o acesso à saúde mais humano e acessível.
            </Description>
          </TextContent>

          <StatsCard>
            <Stat>
              <Number>100%</Number>
              <Label>Foco em inclusão</Label>
            </Stat>

            <Stat>
              <Number>24h</Number>
              <Label>Acesso à plataforma</Label>
            </Stat>

            <Stat>
              <Number>+Diversidade</Number>
              <Label>Cuidado centrado nas pessoas</Label>
            </Stat>
          </StatsCard>
        </Content>
      </Container>
    </Section>
  );
}