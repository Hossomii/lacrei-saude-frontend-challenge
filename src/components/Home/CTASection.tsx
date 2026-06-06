"use client";

import styled from "styled-components";

import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Layout/Container";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;

  background:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.82) 42%,
      rgba(255, 255, 255, 0.58) 100%
    ),
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f5b6c8 9%,
      #5bcffb 18%,
      #613915 27%,
      #111111 36%,
      #e40303 46%,
      #ff8c00 56%,
      #ffed00 66%,
      #008026 76%,
      #24408e 88%,
      #732982 100%
    );
`;

const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  padding: ${({ theme }) => theme.spacing.xxl} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Eyebrow = styled.span`
  width: fit-content;

  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};

  border-radius: 999px;
  background: ${({ theme }) => theme.colors.background.default};

  color: ${({ theme }) => theme.colors.text.accent};
  font-weight: 800;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
  max-width: 760px;

  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 2.25rem;
  line-height: 1.15;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  max-width: 680px;

  color: ${({ theme }) => theme.colors.text.body};
  font-size: 1.125rem;
  line-height: 1.6;
`;

const Graphic = styled.div`
  min-height: 320px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Orbit = styled.div`
  width: min(340px, 80vw);
  height: min(340px, 80vw);

  border-radius: 50%;

  background:
    radial-gradient(circle, rgba(255, 255, 255, 0.92) 0 42%, transparent 43%),
    conic-gradient(
      from 90deg,
      #e40303,
      #ff8c00,
      #ffed00,
      #008026,
      #24408e,
      #732982,
      #5bcffb,
      #f5b6c8,
      #ffffff,
      #613915,
      #111111,
      #e40303
    );

  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);

  position: relative;

  &::before {
    content: "Cuidado";
    position: absolute;
    inset: 50% auto auto 50%;
    transform: translate(-50%, -65%);

    color: ${({ theme }) => theme.colors.text.accent};
    font-weight: 900;
    font-size: 1.75rem;
  }

  &::after {
    content: "com respeito";
    position: absolute;
    inset: 50% auto auto 50%;
    transform: translate(-50%, 35%);

    color: ${({ theme }) => theme.colors.text.body};
    font-weight: 700;
  }
`;

export function CTASection() {
  return (
    <Section>
      <Container>
        <Content>
          <TextContent>
            <Eyebrow>Comece com segurança</Eyebrow>

            <Title>
              O cuidado certo começa quando você se sente respeitado.
            </Title>

            <Description>
              Encontre profissionais preparados para acolher sua história,
              escutar suas necessidades e oferecer atendimento com empatia.
            </Description>

            <Button href="/profissionais">Encontrar profissionais</Button>
          </TextContent>

          <Graphic aria-hidden="true">
            <Orbit />
          </Graphic>
        </Content>
      </Container>
    </Section>
  );
}