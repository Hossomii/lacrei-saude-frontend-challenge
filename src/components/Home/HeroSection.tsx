"use client";

import styled from "styled-components";

import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Layout/Container";

const Hero = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const HeroContent = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Badge = styled.span`
  width: fit-content;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};

  border-radius: 999px;
  background: ${({ theme }) => theme.colors.background.subtle};

  color: ${({ theme }) => theme.colors.text.accent};
  font-weight: 700;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 2.5rem;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  max-width: 640px;

  color: ${({ theme }) => theme.colors.text.body};
  font-size: 1.125rem;
  line-height: 1.5;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

const Illustration = styled.div`
  min-height: 320px;

  border-radius: 24px;

  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.7),
      transparent 18%
    ),
    linear-gradient(135deg, #f5fffb 0%, #ffffff 45%, #dff2ed 100%);

  border: 1px solid ${({ theme }) => theme.colors.border.default};

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.xl};

  &::before {
    content: "";
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: rgba(1, 135, 98, 0.16);
    right: -40px;
    top: -40px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: rgba(0, 78, 155, 0.12);
    left: -32px;
    bottom: -32px;
  }
`;

const VisualCard = styled.div`
  position: relative;
  z-index: 1;

  max-width: 320px;
  padding: ${({ theme }) => theme.spacing.xl};

  border-radius: 20px;
  background: ${({ theme }) => theme.colors.background.default};

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const VisualIcon = styled.div`
  width: 56px;
  height: 56px;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background.accent};

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-weight: 900;
`;

const VisualTitle = styled.strong`
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 1.25rem;
  line-height: 1.3;
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

export function HeroSection() {
  return (
    <Hero>
      <Container>
        <HeroContent>
          <TextContent>
            <Badge>Cuidado inclusivo</Badge>

            <Title>
              Encontre profissionais de saúde que respeitam quem você é.
            </Title>

            <Description>
              A Lacrei Saúde conecta pessoas LGBTQIA+ a profissionais preparados
              para oferecer atendimento seguro, acolhedor e respeitoso.
            </Description>

            <Actions>
              <Button href="/profissionais">Encontrar profissionais</Button>

              <Button
                variant="secondary"
                onClick={() => {
                  document
                    .getElementById("beneficios")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Saiba mais
              </Button>
            </Actions>
          </TextContent>

          <Illustration aria-label="Mensagem de acolhimento da Lacrei Saúde">
            <VisualCard>
              <VisualIcon aria-hidden="true">LS</VisualIcon>

              <VisualTitle>
                Saúde com respeito, segurança e acolhimento.
              </VisualTitle>

              <VisualText>
                Encontre profissionais preparados para cuidar de você sem
                julgamento.
              </VisualText>

              <PrideLine aria-hidden="true" />
            </VisualCard>
          </Illustration>
        </HeroContent>
      </Container>
    </Hero>
  );
}
