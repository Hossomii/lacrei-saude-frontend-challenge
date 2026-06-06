"use client";

import Link from "next/link";
import styled from "styled-components";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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

const SocialList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border.default};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.text.accent};
  background: ${({ theme }) => theme.colors.background.default};

  transition:
    background 150ms ease,
    color 150ms ease,
    border-color 150ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background.accent};
    color: ${({ theme }) => theme.colors.background.default};
    border-color: ${({ theme }) => theme.colors.background.accent};
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

            <SocialList aria-label="Redes sociais da Lacrei Saúde">
              <SocialLink href="#" aria-label="Instagram da Lacrei Saúde">
                <FaInstagram aria-hidden="true" />
              </SocialLink>

              <SocialLink href="#" aria-label="LinkedIn da Lacrei Saúde">
                <FaLinkedinIn aria-hidden="true" />
              </SocialLink>

              <SocialLink href="#" aria-label="Facebook da Lacrei Saúde">
                <FaFacebookF aria-hidden="true" />
              </SocialLink>

              <SocialLink
                href="mailto:contato@lacreisaude.com.br"
                aria-label="Enviar e-mail para Lacrei Saúde"
              >
                <MdEmail aria-hidden="true" />
              </SocialLink>
            </SocialList>

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
