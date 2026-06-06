"use client";

import Link from "next/link";
import styled from "styled-components";

import { Container } from "../Layout/Container";

const Wrapper = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.xxl} 0;

  border-top: 1px solid ${({ theme }) => theme.colors.border.default};

  background: ${({ theme }) => theme.colors.background.subtle};
`;

const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.accent};
  font-size: 1.5rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.5;
`;

const Column = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ColumnTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 1rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.body};

  &:hover {
    color: ${({ theme }) => theme.colors.text.accent};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.accent};
    outline-offset: 3px;
  }
`;

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Brand>
            <Title>Lacrei Saúde</Title>

            <Text>
              Conectando pessoas LGBTQIA+ a profissionais de saúde preparados
              para oferecer cuidado com respeito, segurança e acolhimento.
            </Text>
          </Brand>

          <Column aria-label="Links institucionais">
            <ColumnTitle>Navegação</ColumnTitle>
            <FooterLink href="/">Início</FooterLink>
            <FooterLink href="/profissionais">Profissionais</FooterLink>
          </Column>

          <Column aria-label="Informações do projeto">
            <ColumnTitle>Projeto</ColumnTitle>
            <Text>Desafio técnico Front-end</Text>
            <Text>Next.js + TypeScript</Text>
          </Column>
        </Content>
      </Container>
    </Wrapper>
  );
}