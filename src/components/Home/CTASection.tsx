"use client";

import styled from "styled-components";

import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Layout/Container";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Card = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};

  border-radius: 24px;

  background: linear-gradient(
    135deg,
    #018762 0%,
    #004e9b 100%
  );

  color: white;

  text-align: center;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const Description = styled.p`
  max-width: 700px;
  line-height: 1.6;
`;

export function CTASection() {
  return (
    <Section>
      <Container>
        <Card>
          <Title>
            Pronto para encontrar um profissional?
          </Title>

          <Description>
            Conheça profissionais comprometidos com um atendimento seguro,
            inclusivo e acolhedor.
          </Description>

          <Button
            href="/profissionais"
            variant="secondary"
          >
            Encontrar profissionais
          </Button>
        </Card>
      </Container>
    </Section>
  );
}