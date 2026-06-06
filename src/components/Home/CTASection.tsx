"use client";

import styled from "styled-components";

import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Layout/Container";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;

  padding: ${({ theme }) => theme.spacing.xxl};

  border-radius: 28px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};

  background:
    radial-gradient(circle at 15% 20%, rgba(1, 135, 98, 0.2), transparent 28%),
    radial-gradient(circle at 85% 80%, rgba(0, 78, 155, 0.18), transparent 30%),
    linear-gradient(135deg, #ffffff 0%, #f3fffb 45%, #dff2ed 100%);

  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Eyebrow = styled.span`
  width: fit-content;

  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};

  border-radius: 999px;
  background: ${({ theme }) => theme.colors.background.default};

  color: ${({ theme }) => theme.colors.text.accent};
  font-weight: 800;
`;

const Title = styled.h2`
  max-width: 720px;

  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 2rem;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  max-width: 640px;

  color: ${({ theme }) => theme.colors.text.body};
  font-size: 1.125rem;
  line-height: 1.6;
`;

const Visual = styled.div`
  position: relative;
  z-index: 1;

  padding: ${({ theme }) => theme.spacing.xl};

  border-radius: 24px;
  background: ${({ theme }) => theme.colors.background.default};

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const VisualTitle = styled.strong`
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 1.25rem;
`;

const VisualText = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.5;
`;

const PrideLine = styled.div`
  height: 6px;
  border-radius: 999px;

  background: linear-gradient(
    90deg,
    #bc1c1c,
    #e8a233,
    #00b15c,
    #4d8acb,
    #28588a
  );
`;

export function CTASection() {
  return (
    <Section>
      <Container>
        <Card>
          <Content>
            <Eyebrow>Comece com segurança</Eyebrow>

            <Title>
              O cuidado certo começa quando você se sente respeitado.
            </Title>

            <Description>
              Encontre profissionais preparados para acolher sua história,
              escutar suas necessidades e oferecer atendimento com empatia.
            </Description>

            <Button href="/profissionais">Encontrar profissionais</Button>
          </Content>

          <Visual aria-label="Resumo do cuidado inclusivo">
            <PrideLine aria-hidden="true" />

            <VisualTitle>Atendimento inclusivo</VisualTitle>

            <VisualText>
              Uma experiência pensada para reduzir barreiras, fortalecer vínculos
              e tornar o acesso à saúde mais humano.
            </VisualText>
          </Visual>
        </Card>
      </Container>
    </Section>
  );
}