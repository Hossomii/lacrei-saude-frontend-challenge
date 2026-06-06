"use client";

import styled from "styled-components";

import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Layout/Container";

const Main = styled.main``;

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
  min-height: 280px;

  border-radius: 24px;
  background: linear-gradient(135deg, #018762 0%, #004e9b 100%);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.xl};

  color: ${({ theme }) => theme.colors.background.default};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

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

export default function Home() {
  return (
    <Main>
      <Hero>
        <Container>
          <HeroContent>
            <TextContent>
              <Badge>Cuidado inclusivo</Badge>

              <Title>
                Encontre profissionais de saúde que respeitam quem você é.
              </Title>

              <Description>
                A Lacrei Saúde conecta pessoas LGBTQIA+ a profissionais
                preparados para oferecer atendimento seguro, acolhedor e
                respeitoso.
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
              Saúde com respeito, segurança e acolhimento.
            </Illustration>
          </HeroContent>
        </Container>
      </Hero>

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
                Conexão com profissionais comprometidos com diversidade,
                inclusão e escuta qualificada.
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
    </Main>
  );
}